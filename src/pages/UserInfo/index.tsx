import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { User } from "../Profile"
import { Header } from "../../components/Header"
import { CardsContainer, RepoCard, ReposContainer, ReposText, ReposTitle } from "./style"

export const UserInfo = () => {
    const { id, name } = useParams()

    const [member, setMember] = useState<User>({} as User)

    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchGithubRepos = async () => {
            const repos = await axios.get(`https://api.github.com/users/${name}/repos`)
            setRepos(repos.data)
        }
        fetchGithubRepos().catch(console.error)
    }, [name])

    useEffect(
        () => {
        const fetchMembersData = async () => {
            const user = await api.get(`/user/${id}`)
            setMember(user.data)
        }    
        fetchMembersData().catch(console.error)
    }, [member, id])
    
    return (
        <ReposContainer>
            <Header />
            <ReposTitle>{`${repos.length} Repositórios públicos`}</ReposTitle>
            <CardsContainer>
                {repos.map((repo: any) => {
                    return (
                        <RepoCard key={repo.id}>
                            <ReposText>
                                <h2>{repo.name}</h2>
                                <p>{repo.description}</p>
                                <p>{repo.language}</p>
                                <a href={repo.html_url} target="_blank" rel="noreferrer">Acessar</a>
                            </ReposText>
                        </RepoCard>
                    )
                })}
            </CardsContainer>
        </ReposContainer>
    )
}