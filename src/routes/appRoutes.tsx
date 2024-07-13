import { Routes, Route, Navigate } from 'react-router-dom';
import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';
import { Members } from '../pages/Members';
import { UserInfo } from '../pages/UserInfo';

export function AppRoutes() {
    return (
    <Routes>
        <Route path='/' element={<Home validated/>} />
        <Route path='/members' element={<Members />} />
        <Route path='/member/:id/:name' element={<UserInfo />}/>
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<Navigate to="/" />} />
    </Routes>
)
}
    