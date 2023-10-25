import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import SidebarMobile from './SidebarMobile'
  
type Props = {}

function MobileSideBar({}: Props) {
  return (
   <>
    <Sheet>
  <SheetTrigger className= "md:hidden pr-4"><Menu /></SheetTrigger>
  <SheetContent side="left" className="p-0 pt-10 w-52">
    <SidebarMobile />
  </SheetContent>
</Sheet>

   </>
  )
}

export default MobileSideBar