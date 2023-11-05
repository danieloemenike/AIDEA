import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";


import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ChatClient } from "./_components/ChatClient";
import { useUserStore } from "@/providers/store";


interface ChatIDPageProps {
  params: {
    chatID: string;
  }
} 

const ChatIDPage = async ({
  params
}: ChatIDPageProps) => {
    const { getUser, isAuthenticated } = getKindeServerSession();
      const user = await getUser();


    if (!user.id) {
      return redirect("/");
    }
    if (await !isAuthenticated()) {
      return redirect("/");
    }

  const aidea = await prismadb.aidea.findUnique({
    where: {
      id: params.chatID
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc"
        },
        where: {
          userId:user.id,
        },
      },
      _count: {
        select: {
          messages: true,
        }
      }
    }
  });


  if (!aidea) {
    return redirect("/dashboard");
  }

  return (
    <ChatClient aidea={ aidea } user={user } />
    
  );
}
 
export default ChatIDPage;
