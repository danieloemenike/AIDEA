import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { BiLogOutCircle } from "react-icons/bi";

export default function AvatarLogout() {
      const { getUser } = getKindeServerSession();
    const user = getUser();
    return (
        <>
        
     

<div className="flex w-full h-[100%] items-center mx-auto">
{/* { user?.picture ? (
    <Image className="rounded-full" src={ user?.picture } width={ 55 } height={ 55} alt = "user profile avatar" />
) :
    (
        <div className='bg-purple-800 text-white rounded-full p-4'>
            {user?.given_name?.[0]}
                {user?.family_name?.[0]}
        </div>
    )
} */}

<div className= "w-full ">
{/* <p className="text-2xl">
     Hi {user?.given_name} {user?.family_name}
    </p> */}
 {/* <LogoutLink className="text-white text-bold bg-indigo-600 w-[170px] rounded ml-[2rem] h-[20px] text-lg p-2">
 <BiLogOutCircle />
</LogoutLink> */}
</div>

</div>

</>
    )
}