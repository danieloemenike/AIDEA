
import Image from 'next/image'
import Aidea from "@/public/aidea.svg"
import Link from 'next/link'

import { useParams, usePathname } from 'next/navigation'
import { LogoutLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { BiLogOutCircle } from "react-icons/bi";
import SideBarMenu from './menu'
import { Button } from '../ui/button'
import { Sparkles } from 'lucide-react'
type Props = {}

export default async function SidebarMobile({}: Props) {
  
  return (
      <aside className=" flex-col fixed left-0 h-full w-52 px-4 py-8 bg-white shadow-xl dark:bg-gray-950 rtl:border-r-0 rtl:border-l overflow-auto ">
          
          {/* LOGO DESIGN */}
         
          
          <div className='flex flex-col flex-1 '>
              {/* Menu here*/ }
              <div className='flex items-center flex-shrink-0 mb-3'>
               
              <Link href="/" className=' '>
                        <h2 className="font-bold text-[28px] cursor-pointer  dark:text-white text-black font-blanka w-fit ">
                            AIDEA
                      </h2>
                      </Link>
              </div>
              <SideBarMenu />

              {/* <div className='flex items-center justify-between mt-10 mb-5'>
                  <Button className="bg-gradient-to-r from-sky-700 via-blue-600">
                      Upgrade
                      <Sparkles  />
                    </Button>
                </div> */}
              {/* Profile Picture */}
              {/* <div className='flex items-center justify-between mt-10 mb-5'>
              <div className="flex items-center gap-x-2 ">
                         { user?.picture ? (
                             <Image className="rounded-full" src={ user?.picture } width={ 30 } height={ 30} alt = "user profile avatar" />
                         ) :
                             (
                                 <div className='bg-purple-800 text-white rounded-full p-4'>
                                     {user?.given_name?.[0]}
                                         {user?.family_name?.[0]}
                                 </div>
                             )
                      }
                       <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                              {user?.given_name} 
                             </p>
            </div> 
                         <div className= " ">
                          
                          <LogoutLink className=" text-bold text-white w-[170px] rounded h-[24px] ">
                          <BiLogOutCircle />
                         </LogoutLink>
                         </div>

                     
              </div> */}


          </div>

    </aside>
  )
}