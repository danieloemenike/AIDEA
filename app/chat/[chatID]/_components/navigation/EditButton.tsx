
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Aidea, Message } from '@prisma/client';
import { Edit, MoreVertical, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditIcon from './ui/editIcon';
import DeleteIcon from './ui/deleteIcon';
import { useUserStore } from "@/providers/store";


interface Props {
    aideaID: string
    aideaUserID: string
   
  };

export default function EditButton({ aideaUserID, aideaID }: Props) {

  const user = useUserStore((state) => state.user);
  
    return (
  <>
    {user?.id === aideaUserID && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon">
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
           <EditIcon aideaID ={aideaID} />
                        <DeleteIcon aideaID ={aideaID}/>
          </DropdownMenuContent>
                </DropdownMenu>
       
            ) }
     </>
  )
}