

import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'



type Props = {}

export default function HeroSection({ }: Props) {
  
  return (
      <section className='container h-[50%] grid grid-cols-2  '>
          <div className="   w-[95%] gap-2 p-6">
              <div className=' mx-auto mt-[3rem]'>
              <h2 className='text-[2.8rem] font-bold tracking-tighter'>
              Your <span className= "bg-clip-text font-blanka text-transparent bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700"> Personal </span> <span className='font-blanka tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700'>AI </span> Assistant: <br/> Elevating Efficiency & Unlocking Potential
              </h2>
              </div>
              <div className='mt-[1rem]'>
                  <p className='text-[18px] pr-[1rem] dark:text-white/80'>
                 Experience seamless automation,<span className= "underline decoration-blue-600 underline-offset-4"> instant answers,</span>  and unparalleled support, allowing you to focus on what matters most. Say hello to a smarter, more efficient way of working.
                  </p>
              </div>
              <div className='mt-[20px] w-fit p-2 rounded-lg pl-2 pr-2 shadow-2xl  flex items-center bg-gradient-to-r from-blue-800 via-cyan-600 to-blue-800'>
       
            <h2 className=' font-bold mr-[4px] text-white ' >
                 <RegisterLink>
                Get Started Now
                      </RegisterLink>
                  </h2>
         
              
          </div>

          </div>
          <div>
              
        </div>
    </section>
  )
}