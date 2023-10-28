
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
// import { checkSubscription } from "@/lib/subscription";

export async function POST(req: Request) {
  try {
      const body = await req.json();
      
      const { getUser, isAuthenticated } = getKindeServerSession();
      const user = await getUser();
  
    if (!user.id) {
      return redirect("/");
    }
    if (await !isAuthenticated()) {
      return redirect("/");
    }
    const { src, name, description, instructions, seed, categoryId } = body;

    if (!user || !user.id || !user.given_name) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!src || !name || !description || !instructions || !seed || !categoryId) {
      return new NextResponse("Missing required fields", { status: 400 });
    };

    // const isPro = await checkSubscription();

    // if (!isPro) {
    //   return new NextResponse("Pro subscription required", { status: 403 });
    // }

    const companion = await prismadb.aidea.create({
      data: {
        categoryId,
        userId: user.id,
        userName: user.given_name,
        src,
        name,
        description,
        instructions,
        seed,
      }
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.log("[COMPANION_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
