"use client"
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {  useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/useDebounce'
import qs from "query-string"
type Props = {}

function SearchInput({}: Props) {
    const router = useRouter()
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("categoryId");
    const name = searchParams.get('name');
    const [value, setValue] = useState(name || "");
    const debouncedValue = useDebounce<string>(value, 1000);

    
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = { 
      name: debouncedValue, 
      categoryId: categoryId,
    };

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true, skipEmptyString: true });

    router.push(url);
  }, [debouncedValue, router, categoryId])
    
  return (
      <>
          <form className='hidden md:flex gap-4 flex-grow justify-center items-center '>
                       <div className="flex flex-grow max-w-[600px] ">
                               <input type="search" name="search" id="" placeholder='Search For AiDeas' className='rounded-l-full border border-secondary-border  py-1 px-4 text-base w-full focus:border-blue-500 outline-none shadow' onChange={(e) => setValue(e.target.value)} value = {value}/>
                               <Button className="py-1 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0 shadow bg-blue-600 text-white dark:bg-white dark:text-black">
                               <Search />
                               </Button>
                       </div>
                   </form>
    </>
  )
}

export default SearchInput