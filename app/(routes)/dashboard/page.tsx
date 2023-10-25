
import { Categories } from '@/components/navigation/Categories';
import prismadb from '@/lib/prismadb'


type Props = {}

export default async function page({ }: Props) {
  const categories = await prismadb.category.findMany();

  return (
    <>
  
      <main className=''>
        <Categories categories={categories} />
        <h2> Dashboard </h2>
        
      </main>
    


    </>
  )
}