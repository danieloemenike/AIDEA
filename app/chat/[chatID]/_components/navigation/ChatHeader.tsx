import { ChevronLeft, Edit, MessagesSquare, } from "lucide-react";
import { Aidea, Message } from "@prisma/client";
import EditButton from "./EditButton";
import Link from "next/link";
import { AiAvatar } from "./ui/aiAvatar";

interface ChatHeaderProps {
  aidea: Aidea & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
};

export const ChatHeader = ({
  aidea,
}: ChatHeaderProps) => {

  return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
      <div className="flex gap-x-2 items-center">
        <Link href="/dashboard" className="cursor-pointer">
          <ChevronLeft className="h-8 w-8 cursor-pointer " />
        </Link>
        <AiAvatar src={aidea.src} />
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold">{aidea.name}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <MessagesSquare className="w-3 h-3 mr-1" />
              {aidea._count.messages}
            </div>
          </div>
                  <p className="text-xs text-muted-foreground">
                      
            Created by {aidea.userName}
          </p>
        </div>
          </div>
          <EditButton aideaUserID={ aidea.userId } aideaID={ aidea.id } />
    
    </div>
  );
};
