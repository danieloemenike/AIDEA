// import Header from '@/components/HomePage/Header'
// import Sidebar from '@/components/ui/Sidebar'
import Header from '@/components/navigation/Header'
import Sidebar from '@/components/navigation/Sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Aidea Dashboard ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     
        <Header showEssentials />
       
          <Sidebar />
          <div className='max-w-6xl md:ml-[230px] mx-auto mr-[50px] mt-[4px] p-3 '>
         { children }
         </div>
    
    
 
      </>

    
      // <>
      //     <Header/>
      //     <Sidebar />
      //     <div className='max-w-6xl ml-[230px] mx-auto mr-[50px] mt-[4px] p-3 '>
      //     { children }
      //     </div>
    
      //     </>
  )
}
