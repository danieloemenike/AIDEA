"use client";

import { ElementRef, useEffect, useRef, useState } from "react";
import { Aidea } from "@prisma/client";

import { ChatMessage, ChatMessageProps } from "@/components/chatMessage";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
  isLoading: boolean;
  aidea: Aidea
}

export const ChatMessages = ({
  messages = [],
  isLoading,
  aidea,
}: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);

  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        src={aidea.src}
        role="system"
        content={`Hello, I am ${aidea.name}, ${aidea.description}`}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          src={aidea.src}
          content={message.content}
          role={message.role}
        />
      ))}
      {isLoading && (
        <ChatMessage
          src={aidea.src}
          role="system"
          isLoading
        />
      )}
      <div ref={scrollRef} />
    </div>
  );
};
