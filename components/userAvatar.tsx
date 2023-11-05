
import { Avatar, AvatarImage,AvatarFallback } from "@/components/ui/avatar"

import { useUserStore } from '@/providers/store';

export const UserAvatar = () => {

  const user = useUserStore((state) => state.user);
  
  return (
  <>
 
      <Avatar className="h-12 w-12" >
        { user?.picture ? (
              
          <AvatarImage src={ user?.picture } alt="user profile avatar" />
        )
          :
          (
            <AvatarFallback>
              { user?.given_name?.[0] }
              { user?.family_name?.[0] }
            </AvatarFallback>
                                
          )
        }
     
      </Avatar >
      
  
      </>
  );
};
