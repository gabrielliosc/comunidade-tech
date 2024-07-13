
import { api } from "../../services/api"
import { Header } from "../../components/Header"
import { User } from "../Profile"
import { useEffect, useState } from "react"
import { CardsContainer, MemberCard, MembersContainer, MembersTitle, MemberText } from "./style"
import { Footer } from "../../components/Footer"
import { BsGithub } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

export const Members = () => {
    const [comunityMembers, setComunityMembers] = useState([] as User[])

    const navigate = useNavigate()

    useEffect(
        () => {
        const fetchMembersData = async () => {
            const users = await api.get("/users")
            setComunityMembers(users.data)
        }    
        fetchMembersData().catch(console.error)
    }, [])

    return (
        <MembersContainer>
            <Header />
            <MembersTitle>{`${comunityMembers.length} Membros`}</MembersTitle>
            <CardsContainer>
                {comunityMembers.map((member: User) => {
                    return (
                        <MemberCard key={member.id} image={`https://github.com/${member.name}.png`}>
                            <MemberText>
                                <h2>{member.name}</h2>
                                <p>{member.role}</p>
                                <p>{member.linkedin}</p>
                                <button onClick={() => navigate(`/member/${member.id}/${member.name}`)}><BsGithub size={15}/> Ver repositórios</button>
                            </MemberText>
                        </MemberCard>
                    )
                })}
            </CardsContainer>
            <Footer />
        </MembersContainer>
    )
}