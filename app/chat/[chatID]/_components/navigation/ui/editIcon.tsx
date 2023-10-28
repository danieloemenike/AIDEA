"use client"
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Edit } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    aideaID:string
}

function EditIcon({ aideaID }: Props) {
    const router = useRouter();
  return (
      <>
           <DropdownMenuItem onClick={() => router.push(`/aidea/${aideaID}`)}>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
          </>
  )
}

export default EditIcon