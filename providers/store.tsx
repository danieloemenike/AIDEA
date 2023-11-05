import { KindeUser,getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { create } from 'zustand'

export type UserState = {
    user: KindeUser | null
    setUser: (user: UserState['user']) => void;
    // fetchUser: () => Promise<void>
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user: KindeUser | null ) =>set({user}),

}))     