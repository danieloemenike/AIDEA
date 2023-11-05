import { Redis } from "@upstash/redis";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeClient } from "@pinecone-database/pinecone";
import { PineconeStore } from "langchain/vectorstores/pinecone";

export type AideaKey = {
  aideaName: string;
  modelName: string;
  userId: string;
};

export class MemoryManager {
  private static instance: MemoryManager;
  private history: Redis;
  private vectorDBClient: PineconeClient;

  public constructor() {
    this.history = Redis.fromEnv();
    this.vectorDBClient = new PineconeClient();
  }

  public async init() {
    if (this.vectorDBClient instanceof PineconeClient) {
      await this.vectorDBClient.init({
        apiKey: process.env.PINECONE_API_KEY!,
        environment: process.env.PINECONE_ENVIRONMENT!,
      });
    }
  }

  public async vectorSearch(
    recentChatHistory: string,
    companionFileName: string
  ) {
    const pineconeClient = <PineconeClient>this.vectorDBClient;

    const pineconeIndex = pineconeClient.Index(
      process.env.PINECONE_INDEX! || ""
    );

    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
      { pineconeIndex }
    ); 

    const similarDocs = await vectorStore
      .similaritySearch(recentChatHistory, 3, { fileName: companionFileName })
      .catch((err) => {
        console.log("WARN   ING: failed to get vector search results.", err);
      });
    return similarDocs;
  }

  public static async getInstance(): Promise<MemoryManager> {
    if (!MemoryManager.instance) {
      MemoryManager.instance = new MemoryManager();
      await MemoryManager.instance.init();
    }
    return MemoryManager.instance;
  }

  private generateRedisCompanionKey(aideaKey: AideaKey): string {
    return `${aideaKey.aideaName}-${aideaKey.modelName}-${aideaKey.userId}`;
  }

  public async writeToHistory(text: string, aideaKey: AideaKey) {
    if (!aideaKey || typeof aideaKey.userId == "undefined") {
      console.log("Aidea key set incorrectly");
      return "";
    }

    const key = this.generateRedisCompanionKey(aideaKey);
    const result = await this.history.zadd(key, {
      score: Date.now(),
      member: text,
    });

    return result;
  }

  public async readLatestHistory(aideaKey: AideaKey): Promise<string> {
    if (!aideaKey || typeof aideaKey.userId == "undefined") {
      console.log("Aidea key set incorrectly");
      return "";
    }

    const key = this.generateRedisCompanionKey(aideaKey);
    let result = await this.history.zrange(key, 0, Date.now(), {
      byScore: true,
    });

    result = result.slice(-30).reverse();
    const recentChats = result.reverse().join("\n");
    return recentChats;
  }

  public async seedChatHistory(
    seedContent: String,
    delimiter: string = "\n",
    aideaKey: AideaKey
  ) {
    const key = this.generateRedisCompanionKey(aideaKey);
    if (await this.history.exists(key)) {
      console.log("User already has chat history");
      return;
    }

    const content = seedContent.split(delimiter);
    let counter = 0;
    for (const line of content) {
      await this.history.zadd(key, { score: counter, member: line });
      counter += 1;
    }
  }
}

