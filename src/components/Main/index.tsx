import { FaGithub, FaHtml5, FaLinkedin, FaNode, FaReact } from "react-icons/fa";

import { ProfileButton, ProfileLabel, ProfileContent, ProfileElements, ProfileInput, ProfileTitle, Tag, Column, TechnologiesContainer, ElementContent } from "./style";

import { RiJavascriptFill } from "react-icons/ri";
import { BiEdit, BiSave } from "react-icons/bi";
import { User } from "../../pages/Profile";
import { api } from "../../services/api";
import { useState } from "react";

export function Main({user}: {user: User}) {
    const [name, setName] = useState(user.name)

    const [role, setRole] = useState(user.role)

    const [about, setAbout] = useState(user.about)

    const [linkedin, setLinkedin] = useState(user.linkedin)

    const [github, setGithub] = useState(user.github)

    const [email, setEmail] = useState(user.email)

    const [basicInfoReadOnly, setBasicInfoReadOnly] = useState(true)

    const [aboutReadOnly, setAboutReadOnly] = useState(true)

    const [infosReadOnly, setInfosReadOnly] = useState(true)

    function handleTechEdit() {
        console.log('Editando techs')
    }

    const handleInfosEdit = () => setInfosReadOnly(false)

    const handleAboutEdit = () => setAboutReadOnly(false)

    const handleBasicInfoEdit = () => setBasicInfoReadOnly(false)

    async function handleInfosUpdate() {
        setInfosReadOnly(true)
        await api.put(`/user/${user.id}`, {
            name,
            email,
            linkedin,
            github
        })
    }
    async function handleBasicInfoUpdate() {
        setBasicInfoReadOnly(true)
        await api.put(`/user/${user.id}`, {
            name,
            role
        })
    }

    async function handleAboutUpdate() {
        setAboutReadOnly(true)
        await api.put(`/user/${user.id}`, {
            about
        })
    }

    return (
        <ProfileContent>
            <ProfileTitle>Perfil</ProfileTitle>
            <ProfileElements>
                <ElementContent>
                    <img src="https://github.com/maria.png" alt="" />
                    <div>
                        <h2>
                            <input type="text" readOnly={basicInfoReadOnly} onChange={e => setName(e.target.value)} value={name}/>
                        </h2>
                        <h3>
                            <input type="text" readOnly={basicInfoReadOnly} onChange={e => setRole(e.target.value)} value={role}/>
                        </h3>
                    </div>
                </ElementContent>
                {basicInfoReadOnly ? <ProfileButton onClick={handleBasicInfoEdit}><BiEdit/> Editar</ProfileButton> : <ProfileButton onClick={handleBasicInfoUpdate}><BiSave /> Salvar</ProfileButton> }
            </ProfileElements>

            <ProfileElements>
                <h2>Sobre</h2>
                <p>
                    <textarea cols={60} readOnly={aboutReadOnly} onChange={e => setAbout(e.target.value)} value={about}/>                     
                </p>
            
                {aboutReadOnly ? 
                <ProfileButton onClick={handleAboutEdit}><BiEdit/> Editar</ProfileButton> : 
                <ProfileButton onClick={handleAboutUpdate}><BiSave /> Salvar</ProfileButton> }
            </ProfileElements>

            <ProfileElements>
                <Column>
                    <ProfileLabel htmlFor="">
                        Nome Completo
                        <ProfileInput type="text" readOnly={infosReadOnly} onChange={e => setName(e.target.value)} value={name} />
                    </ProfileLabel>
                    <ProfileLabel htmlFor="">
                        Email
                        <ProfileInput type="email" readOnly={infosReadOnly} onChange={e => setEmail(e.target.value)} value={email} />
                    </ProfileLabel>
                </Column>
                <Column>
                    <ProfileLabel htmlFor="">
                        <FaLinkedin/> Linkedin
                        <ProfileInput type="text" readOnly={infosReadOnly} onChange={e => setLinkedin(e.target.value)} value={linkedin} />
                    </ProfileLabel>
                    <ProfileLabel htmlFor="">
                        <FaGithub /> Github
                        <ProfileInput type="text" readOnly={infosReadOnly} onChange={e => setGithub(e.target.value)} value={github} />
                    </ProfileLabel>
                    {infosReadOnly ? 
                    <ProfileButton onClick={handleInfosEdit}><BiEdit/> Editar</ProfileButton> : 
                    <ProfileButton onClick={handleInfosUpdate}><BiSave /> Salvar</ProfileButton> }
                </Column>                
            </ProfileElements>

            <ProfileElements>
                <h2>Tecnologias</h2>
                <TechnologiesContainer>
                    <Tag><FaReact/> React</Tag>
                    <Tag><FaNode /> Node</Tag>
                    <Tag><RiJavascriptFill /> JavaScript</Tag>
                    <Tag><FaHtml5/> HTML</Tag>
                </TechnologiesContainer>
                <ProfileButton onClick={handleTechEdit}><BiEdit/> Editar</ProfileButton>
            </ProfileElements>
        </ProfileContent>
    )
}