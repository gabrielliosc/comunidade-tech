import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { Members } from '../pages/Members';
import { UserInfo } from '../pages/UserInfo';

export function AuthRoutes(){
    const user = localStorage.getItem("@mvp:user")
    
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/members' element={<Members />} />
            <Route path='/member/:id/:name' element={<UserInfo />}/>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />

            { !user && <Route path='*' element={<Navigate to="/" />} />}
        </Routes>
    )
}