import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./appRoutes";
import { AuthRoutes } from "./authRoutes";

export function Routes(){
    const { user } = useAuth()

    return (
        <BrowserRouter>
            {user ? <AppRoutes/>: <AuthRoutes />} 
        </BrowserRouter>
    )
}