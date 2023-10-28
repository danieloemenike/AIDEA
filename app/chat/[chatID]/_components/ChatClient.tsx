

// import { useCompletion } from "ai/react";
import { FormEvent, useState } from "react";
import { Aidea, Message } from "@prisma/client";
import { useRouter } from "next/navigation";

// import { ChatForm } from "@/components/chat-form";

// import { ChatMessages } from "@/components/chat-messages";
// import { ChatMessageProps } from "@/components/chat-message";
import { ChatHeader } from "./navigation/ChatHeader";

interface ChatClientProps {
  aidea: Aidea & {
    messages: Message[];
    _count: {
      messages: number;
    }
  };
};

export const ChatClient = ({
  aidea,
}: ChatClientProps) => {
//   const router = useRouter();
//   const [messages, setMessages] = useState<ChatMessageProps[]>(aidea.messages);
  
//   const {
//     input,
//     isLoading,
//     handleInputChange,
//     handleSubmit,
//     setInput,
//   } = useCompletion({
//     api: `/api/chat/${aidea.id}`,
//     onFinish(_prompt, completion) {
//       const systemMessage: ChatMessageProps = {
//         role: "system",
//         content: completion
//       };

//       setMessages((current) => [...current, systemMessage]);
//       setInput("");

//       router.refresh();
//     },
//   });

//   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//     const userMessage: ChatMessageProps = {
//       role: "user",
//       content: input
//     };

//     setMessages((current) => [...current, userMessage]);

//     handleSubmit(e);
//   }

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader aidea={aidea} />
      {/* <ChatMessages 
        aidea={aidea}
        isLoading={isLoading}
        messages={messages}
      /> */}
      {/* <ChatForm 
        isLoading={isLoading} 
        input={input} 
        handleInputChange={handleInputChange} 
        onSubmit={onSubmit} 
      /> */}
    </div>
   );
}
