import {type ReactNode } from "react"
import { AuthContext } from "./context"


interface AuthProviderProps{
    children: ReactNode
    token: string
}

export function AuthProvider({children, token}: AuthProviderProps){
    return(
        <AuthContext.Provider value={token}>
            {children}
        </AuthContext.Provider>
    )
}