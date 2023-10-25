import { redirect } from "next/navigation";


import prismadb from "@/lib/prismadb";
import { checkSubscription } from "@/lib/subscription";

import { aideaForm } from "./components/aidea-form";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface aideaIDPageProps {
  params: {
    aideaID: string;
  };
};

export default async function AideaIDPage ({
  params
}: aideaIDPageProps) {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

  if (!user) {
    return redirect("/");
  }
  if (await !isAuthenticated()) {
    return redirect("/");
  }
  const validSubscription = await checkSubscription();

  if (!validSubscription) {
    return redirect("/");
  }

  const aidea = await prismadb.aidea.findUnique({
    where: {
      id: params.aideaID,
      userId,
    }
  });

  const categories = await prismadb.category.findMany();

  return ( 
    <aideaForm initialData={aidea} categories={categories} />
  );
}
 

