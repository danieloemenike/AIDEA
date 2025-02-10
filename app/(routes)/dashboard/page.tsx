
import { Categories } from '@/components/navigation/Categories';
import { Separator } from '@/components/ui/separator';
import prismadb from '@/lib/prismadb'
import { Aideas } from './_components/Aideas';


interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
};


export default async function page( { searchParams
}: RootPageProps) {
  const categories = await prismadb?.category?.findMany();
  const data = await prismadb?.aidea?.findMany({
    where: {
      categoryId: searchParams?.categoryId,
      name: {
        search: searchParams?.name,
      },
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          messages: true,
        }
      }
    },
  });

  return (
    <>
  
      <main className='h-screen w-full'>
        <Categories categories={categories} />
        <Separator className="bg-primary/10 my-2" />
      
        <Aideas data={data} />
      </main>
    


    </>
  )
}