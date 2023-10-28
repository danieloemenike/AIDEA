"use client"
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "@/static-data/routes"
import Link from "next/link";

export default function SideBarMenu() {
    const activeRoute = usePathname();
    const router = useRouter()
    const OnNavigate = (url:string, pro: boolean) => {
        router.push(url)
    }
    return (
        <nav className='-mx-3 space-y-6 '>
                 
                      { Menu.map((routes) => (
                          
                              <div className='space-y-3 ' key = {routes.id}>
                                  <h3 className='cursor-pointer px-3 text-xs text-gray-300 uppercase dark:text-gray-400'> { routes.label } </h3>
                                  { routes.menu.map((route) => (
                                      
                                          <div onClick={ () => OnNavigate(route.path, route.pro) } className= {`flex group items-center cursor-pointer px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${activeRoute === `${route.path}` ? 'bg-gradient-to-r from-stone-800 via-sky-600 to-blue-800  shadow-lg hover:bg-blue-700' : "  hover:text-gray-300 "} hover:bg-blue-200  rounded-md hover:shadow-md ` }  key={ route.id } >
                                              <div className=''>
                                                 <route.icon className = "w-5 h-5 "/>
                                              </div>
                          <h4 className={ ` mx-3 text-sm font-normal capitalize ${activeRoute === `${route.path}` ? 'text-white ' : 'text-gray-400 dark:group-hover:text-gray-300'}` }> {route.title} </h4>
                      </div> 
                                    
                                  ))}
                     
                           </div>
                          
                      ))}
                    
              
              </nav> 
    )
}