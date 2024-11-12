'use client'

import { createContext, useContext, useState } from 'react'

export type UserType = {
      name: string
      email: string
      country: string
}

interface UserContextType {

      user: UserType | null
      setUser: (user: UserType) => void
      isWinner: boolean
      setIsWinner: (isWinner: boolean) => void

}



const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {

      const context = useContext(UserContext)
      if (!context) {
            throw new Error("useUser must be used within a UserProvider")
      }

      return context

}

export function UserProvider({ children }: { children: React.ReactNode }) {
      const [user, setUser] = useState<UserType | null>(null)
      const [isWinner, setIsWinner] = useState<boolean>(true)

      return (
            <UserContext.Provider value={{ user, setUser, isWinner, setIsWinner }}>
                  {children}
            </UserContext.Provider>
      )
}
