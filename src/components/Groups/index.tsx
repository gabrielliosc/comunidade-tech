import { GroupsTitle, GroupsContainer, GroupsContent, GroupsCard, GroupsText, AddGroup } from "./style";

export function Groups() {
    const groups = [
        {   
            id: 1,
            image: "http://github.com/react.png",
            name: "Grupo 1",
            description: "Descrição do grupo 1",
            members: 10
        },
        {
            id: 2,
            image: "http://github.com/nodejs.png",
            name: "Grupo 2",
            description: "Descrição do grupo 2",
            members: 20
        },
        {
            id: 3,
            image: "http://github.com/java.png",
            name: "Grupo 3",
            description: "Descrição do grupo 3",
            members: 30
        },
    ]
    return (
        <GroupsContainer>
            <GroupsTitle>Meus Grupos</GroupsTitle>

            <GroupsContent>
            {groups.map(group => (
                <GroupsCard key={group.id} image={group.image}>
                    <GroupsText>
                        <h2>{group.name}</h2>
                        <p>{group.description}</p>
                        <p>{group.members} membros</p>
                    </GroupsText>
                </GroupsCard>
            ))}
            <AddGroup>
                <p>Adicionar</p>
            </AddGroup>
            </GroupsContent>
        </GroupsContainer>
    )
}