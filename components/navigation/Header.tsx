import Image from 'next/image'
// import React, { useState } from 'react'
import Aidea from "@/public/aidea.svg"
import { Button } from '../ui/button'
import { Menu, Search} from 'lucide-react'
import { ModeToggle } from '../ui/modeToggle'
import { LoginLink, LogoutLink, RegisterLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { BiLogOutCircle } from 'react-icons/bi'
import MobileSideBar from './MobileSideBar'
import SearchInput from './SearchInput'

type Props = {
    showEssentials?: boolean
}

function Header({showEssentials }: Props) {

    //  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = getUser();
  return (
      <>
          <header className=' shadow-md dark:bg-black bg-white dark:shadow-2xl w-full mb-1 sticky top-0 z-50 backdrop-filter backdrop-blur-lg  border-b-2'>
              <nav className=" flex  gap-10 lg:gap-20 justify-between mx-10 pt-2 items-center  h-[5rem]">
              {/* <PageHeaderFirstSection hidden={showFullWidthSearch} />
       */}
                  <div className='flex gap-4 items-center flex-shrink-0'>
                      { showEssentials && (
                           <MobileSideBar/>
                      )}
                
              <Image src = {Aidea} alt= "Aidea Logo" className='object-contain h-12 ml-4 w-full' priority role='img' />
                  </div>
                  { showEssentials && (
                       <SearchInput />
                  )}
             
              <div className="flex gap-8 items-center flex-shrink-0 ">
                      <ModeToggle />
                      { showEssentials && ( 
                          
                     
                  <Button className='bg-gradient-to-r from-sky-800 via-stone-600  to-blue-800 dark:text-white shadow-2xl hover:bg-blue-700 dark:bg-white'>
                     Upgrade to Aidea Pro
             </Button>
                           )}
                  <nav className='flex '>
                 
                 { !isAuthenticated() ?
                         (<>
                             <div className='flex items-center justify-center  h-full w-full gap-4 '>
                        <LoginLink className="">Sign in</LoginLink>
                                 <RegisterLink className="text-white text-bold bg-gradient-to-br from-cyan-600 to-blue-800  rounded  p-2 ">Get Started</RegisterLink>
                                 </div>
                         </>)
                     :
                    ( 
                    
                             <div className="flex w-full h-[100%] items-center mx-auto justify-between">
                         { user?.picture ? (
                             <Image className="rounded-full border border-white" src={ user?.picture } width={ 55 } height={ 55} alt = "user profile avatar" />
                         ) :
                             (
                                 <div className='bg-gradient-to-r from-blue-800 via-cyan-600 to-blue-800 text-white rounded-full p-4'>
                                     {user?.given_name?.[0]}
                                         {user?.family_name?.[0]}
                                 </div>
                             )
                         }
                        
                         <div className= "w-full flex flex-col  ">
                         {/* <p className="text-2xl">
                              Hi {user?.given_name} {user?.family_name}
                             </p> */}
                         <LogoutLink className="dark:text-white  text-black ml-[1rem] mb-[0.5rem] h-[20px] text-3xl ">
                         <BiLogOutCircle />
                         </LogoutLink>
                         </div>

                     </div>)
                 }
                    
                 </nav>
                  </div>
                  </nav>
          </header>  
    </>
  )
}

export default Header

// type PageHeaderFirstSectionProps = {
//     hidden?: boolean
//   }
// export function PageHeaderFirstSection({
//     hidden = false,
//   }: PageHeaderFirstSectionProps) {
//     const { toggle } = useSidebarContext()
  
//     return (
//       <div
//         className={`gap-4 items-center flex-shrink-0 ${
//           hidden ? "hidden" : "flex"
//         }`}
//       >
//         <Button onClick={toggle} variant="ghost" size="icon">
//           <Menu />
//         </Button>
//         <a href="/">
//           <img src={logo} className="h-6" />
//         </a>
//       </div>
//     )
//   }