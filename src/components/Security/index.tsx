import { useState } from "react";
import { User } from "../../pages/Profile";
import { api } from "../../services/api";
import { SecurityButton, SecurityCheckbox, SecurityContent, SecurityElements, SecurityInput, SecurityLabel, SecurityTitle, OptionLabel } from "./style";
import { BiCheck } from "react-icons/bi";

export function Security({user}: {user: User}) {

    const [passwordOld, setPasswordOld] = useState('') 

    const [passwordNew, setPasswordNew] = useState('')
    
    async function handleUpdate(){
        const updated = {
            password: passwordNew,
            old_password: passwordOld
        }
        const userUpdated = Object.assign(user, updated)

        try {
            await api.put(`/user/${user.id}`, userUpdated)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar o perfil")
            }
        }
    }

    return (
        <SecurityContent>
            <SecurityTitle>Segurança</SecurityTitle>

            <SecurityElements>
                <SecurityLabel>
                    Senha atual
                    <SecurityInput placeholder="Senha atual" type="password" onChange={e => setPasswordOld(e.target.value)} />
                </SecurityLabel>
                <SecurityLabel>
                    Nova senha
                    <SecurityInput placeholder="Senha nova" type="password" onChange={e => setPasswordNew(e.target.value)} />
                </SecurityLabel>
                <SecurityButton onClick={handleUpdate}><BiCheck color="" /> Confirmar</SecurityButton>
            </SecurityElements>

            <SecurityElements>
                <OptionLabel>
                    <SecurityCheckbox /> 
                    <span>Compartilhar informações do perfil com contatos apenas</span>
                </OptionLabel>
                <OptionLabel>
                    <SecurityCheckbox /> 
                    <span>Compartilhar informações do perfil com usuárias dos grupos participantes</span>
                </OptionLabel>
                <OptionLabel>
                    <SecurityCheckbox /> 
                    <span>Compartilhar informações do perfil com todas</span>
                </OptionLabel>
            </SecurityElements>
        </SecurityContent>
    )
}