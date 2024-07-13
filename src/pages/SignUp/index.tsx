import { Container, SignUpContainer, FormContainer, FirstColumn, SecondColumn, AccountContainer } from './style'
import { Button } from "../../components/Button"
import comunidadeImg from '../../assets/m_t.png'
import { Input } from "../../components/Input"
import loginImg from '../../assets/login.png'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleCreateAccount = async() => {
        if (name && email && password){
            api.post('/user', {
                name,
                email,
                password
            })
            alert('Conta criada com sucesso!')
            navigate('/login')
        } else {
            alert('Preencha todos os campos')
        }
            
    }
    return (
        <Container>
            <SignUpContainer>
                <FirstColumn>
                    <img src={comunidadeImg} alt="" />
                    <h1>Bem vinda!</h1>
                    <h2>Entre com seus dados para entrar para comunidade</h2>

                    <FormContainer>
                        <Input label="Nome" type="text" onChange={e => setName(e.target.value)} value={name}/>
                        <Input label="Email" type="email" onChange={e => setEmail(e.target.value)} value={email} />
                        <Input label="Senha" type="password" onChange={e => setPassword(e.target.value)} value={password} />
                        <Button onClick={handleCreateAccount}>Crie sua conta</Button>
                    </FormContainer>

                    <AccountContainer>
                        Já possui uma conta? 
                        <strong onClick={() => navigate("/login")}> Faça o login</strong>
                    </AccountContainer>
                </FirstColumn>
                <SecondColumn>
                    <img src={loginImg} alt="" />
                </SecondColumn>
            </SignUpContainer>
        </Container>
    )
}