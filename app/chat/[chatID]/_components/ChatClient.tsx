"use client"

import { useCompletion } from "ai/react";
import { FormEvent, useState } from "react";
import { Aidea, Message } from "@prisma/client";
import { useRouter } from "next/navigation";

import { ChatForm } from "@/components/chatForm";

import { ChatMessages } from "@/components/chatMessages";

import { ChatHeader } from "./navigation/ChatHeader";
import { ChatMessageProps } from "@/components/chatMessage";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/server";
import { useUserStore } from "@/providers/store";
interface ChatClientProps {
  aidea: Aidea & {
    messages: Message[];
    _count: {
      messages: number;
    }
  };
  user : KindeUser
  
};

export const ChatClient = ({
  aidea, user
}: ChatClientProps) => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageProps[]>(aidea.messages);
  
    const {
      input,
      isLoading,
      handleInputChange,
      handleSubmit,
      setInput,
    } = useCompletion({
      api: `/api/chat/${aidea.id}`,
      onFinish(_prompt, completion) {
        const systemMessage: ChatMessageProps = {
          role: "system",
          content: completion
        };

        setMessages((current) => [...current, systemMessage]);
        setInput("");

      router.refresh();
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  }
  const setUser = useUserStore((state) => state.setUser);
  setUser(user)
  return (
    <div className="flex flex-col h-[100dvh] p-4 space-y-2">
      <ChatHeader aidea={aidea} />
      <ChatMessages 
        aidea={aidea}
        isLoading={isLoading}
        messages={messages}
      />
      <ChatForm 
        isLoading={isLoading} 
        input={input} 
        handleInputChange={handleInputChange} 
        onSubmit={onSubmit} 
      />
    </div>
   );
}
