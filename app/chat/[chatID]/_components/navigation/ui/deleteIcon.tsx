"use client"
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
   aideaID :string
}

function DeleteIcon({ aideaID}: Props) {
    const router = useRouter();
       const { toast } = useToast();

  const onDelete = async () => {
    try {
      await axios.delete(`/api/aidea/${aideaID}`);
      toast({
        description: "Success."
      });
      router.refresh();
      router.push("/");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong."
      })
    }
  }
  return (
    <>
          <DropdownMenuItem onClick={onDelete}>
              <Trash className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </>
  )
}

export default DeleteIcon