import { redirect } from "next/navigation";


import prismadb from "@/lib/prismadb";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AideaForm from "./_components/AideaForm";
// import { checkSubscription } from "@/lib/subscription";




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

  if (!user.id) {
    return redirect("/");
  }
  if (await !isAuthenticated()) {
    return redirect("/");
  }
  // const validSubscription = await checkSubscription();

  // if (!validSubscription) {
  //   return redirect("/");
  // }

  const aideaData = await prismadb.aidea.findUnique({
    where: {
      id: params.aideaID,
      userId: user.id,
    }
  }) || null;

  const categories = await prismadb.category.findMany();

  return ( 
    <AideaForm initialData={aideaData} categories={categories} />
  );
}
 

