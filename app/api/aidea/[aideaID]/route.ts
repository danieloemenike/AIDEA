
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { checkSubscription } from "@/lib/subscription";

export async function PATCH(
  req: Request,
  { params }: { params: { aideaID: string } }
) {
  try {
    const body = await req.json();
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

  
  if (await !isAuthenticated()) {
    return redirect("/");
  }
    const { src, name, description, instructions, seed, categoryId } = body;

    if (!params.aideaID) {
      return new NextResponse("aidea ID required", { status: 400 });
    }

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

    const aidea = await prismadb.aidea.update({
      where: {
        id: params.aideaID,
        userId: user.id,
      },
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

    return NextResponse.json(aidea);
  } catch (error) {
    console.log("[aidea_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export async function DELETE(
  request: Request,
  { params }: { params: { aideaID: string } }
) {
  try {
    
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser().id;

  
  if (await !isAuthenticated()) {
    return redirect("/");
  }
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const aidea = await prismadb.aidea.delete({
      where: {
        userId: user,
        id: params.aideaID
      }
    });

    return NextResponse.json(aidea);
  } catch (error) {
    console.log("[aidea_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
