import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";
import { User } from "../pages/Profile";

export const AuthContext = createContext({
    user: {} as User,
    signIn: async ({ email, password }: {email: string, password: string}) => {},
    signOut: () => {},
    sessionId: ""
})

interface AuthContextData {
    user: User,
    sessionId: string,
}

function AuthProvider({ children }: {children: React.ReactNode}){
    const [data, setData] = useState<AuthContextData>({} as AuthContextData)

    async function signIn({ email, password}: {email: string, password: string}){
        try{
            const response = await api.post("/login", {email, password})
            console.log(response.data)
            
            const { user, sessionId } = response.data

            localStorage.setItem("@mvp:user", JSON.stringify(user))
            localStorage.setItem("@mvp:sessionId", sessionId)

            setData({ user, sessionId })

            console.log(user, sessionId)
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {

            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível fazer o login")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@mvp:sessionId")
        localStorage.removeItem("@mvp:user")

        setData({} as AuthContextData)
    }

    useEffect(() => {
        const sessionId = localStorage.getItem("@mvp:sessionId")
        const user = localStorage.getItem("@mvp:user")

        if(sessionId && user) {
            setData({
                sessionId,
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
    <AuthContext.Provider value={{ signIn, signOut, user: data.user, sessionId: data.sessionId}}>
        {children}
    </AuthContext.Provider>)
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}
export { AuthProvider, useAuth }