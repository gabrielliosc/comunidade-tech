import logoImg from '../../assets/m_t.png';
import { SlUserFemale } from 'react-icons/sl';
import { HeaderContainer, Menu } from './style';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';

type HeaderProps = {
    validated?: boolean
}

export function Header<HeaderProps>({ validated = false }) {

    const navigate = useNavigate()

    const [userId, setUserId] = useState('')

    const {signOut, user} = useAuth()

    // user && setUserId(user.id)

    const menu = [
        {id: 1, name: 'Ínicio', link: '/'},
        {id: 2, name: 'Eventos', link: '/eventos'},
        {id: 3, name: 'Vagas', link: '/vagas'},
        {id: 4, name: 'Links Úteis', link: '/links-uteis'},
        {id: 5, name: 'Cursos e Mentorias', link: '/cursos-mentorias'},
        {id: 6, name: 'Grupos', link: '/grupos'},
        {id: 7, name: 'Membros', link: '/members'}
    ]

    function handleSignOut(){
        navigate("/")
        signOut()
    }

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('@mvp:user') || '{}')
        setUserId(localUser.id)
    }, [validated])
    
    
    return (
        <HeaderContainer>
            <img src={logoImg} alt="Logo" />
            <Menu>
            {
                menu.map(item => (
                    <li key={item.id} onClick={() => navigate(item.link)}>{item.name}</li>
                ))
            }   
            {!validated ?
            <>
                <SlUserFemale size={30} onClick={() => navigate("/login")} />
            </>
            :
            <>
                <li key={8} onClick={() => {navigate(`profile/${userId}`)}}>{'Meu Perfil'}</li>
                <MdLogout size={25} onClick={handleSignOut} />
            </> }            
            </Menu>
        </HeaderContainer>
        );
}