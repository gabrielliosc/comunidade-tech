import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Groups } from "../../components/Groups";
import { Security } from "../../components/Security";
import { NavProfile, PeopleStatus, PersonStatus, ProfileContainer, StatusCircle, StatusInfo, ProfileContent } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role?: string;
    about?: string;
    linkedin?: string;
    github?: string;
    avatar?: string;
    session_id: string;
}

export function Profile() {
    const { user } = useAuth()

    const [userData, setUserData] = useState<User>(user)

    const params = useParams()

    useEffect(() => {
        async function fetchNote(){
            const response = await api.get(`/user/${params.id}`)
            setUserData(response.data)
        }
        fetchNote()
    },[params.id])

    const [menu, setMenu] = useState('Perfil')

    const usersStatus = [{
        'id': 1,
        'name': 'Maria',
        'status': 'online',
        'avatar': 'https://github.com/maria.png'
        },{
        'id': 2,
        'name': 'Marcele',
        'status': 'offline',
        'avatar': 'https://github.com/marcele.png'
        },{
        'id': 3,
        'name': 'Fernanda',
        'status': 'offline',
        'avatar': 'https://github.com/fernanda.png'
        }
    ]
    const handleDelete = async () => {
        await api.delete(`/user/${userData.id}`)
    }

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLLIElement;
        
        setMenu(target.childNodes[0].nodeValue as string)
    }

    const renderMenu: { [key: string]: JSX.Element } = {
        'Perfil': <Main user={userData} />,
        'Segurança': <Security user={userData} />,
        'Contatos': <img />,
        'Grupos': <Groups />,
        'Certificados': <img />
    }
    return (
        <>
            <Header />
            <ProfileContent>
                <ProfileContainer>
                    <NavProfile>
                        <li onClick={handleMenu}>Perfil</li>
                        <li onClick={handleMenu}>Segurança</li>
                        <li onClick={handleMenu}>Contatos</li>
                        <li onClick={handleMenu}>Grupos</li>
                        <li onClick={handleMenu}>Certificados</li>
                        <li onClick={handleDelete}>Apagar conta</li>
                    </NavProfile>

                    {renderMenu[menu]}
                    
                </ProfileContainer>
                <PeopleStatus>
                        <p>Online</p>
                        {   
                            usersStatus.map(user => {
                                return (
                                    <PersonStatus key={user.id}>
                                        <img src={user.avatar} alt={user.name} />
                                        <StatusCircle />
                                        <StatusInfo>
                                            {user.name}
                                            <span>{user.status}</span>
                                        </StatusInfo>
                                    </PersonStatus>
                                )
                            })
                        }
                </PeopleStatus>
            </ProfileContent>
        </>
    )
}