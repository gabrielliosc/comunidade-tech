import { Container, SignInContainer, FormContainer, FirstColumn, SecondColumn, CreateAccountContainer } from './style'
import { Button } from "../../components/Button"
import comunidadeImg from '../../assets/m_t.png'
import { Input } from "../../components/Input"
import loginImg from '../../assets/login.png'
import { MouseEvent, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'


export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    const navigate = useNavigate()

    const handleSignIn = async(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if(!email || !password){
            return alert("Preencha todos os campos!")
        }

        signIn({ email, password })
    }
    return (
        <Container>
            <SignInContainer>
                <FirstColumn>
                    <img src={comunidadeImg} alt="" />
                    <h1>Olá de novo!</h1>
                    <h2>Entre com seus dados para fazer o login</h2>
                    
                    <FormContainer>
                        <Input label="Email" type="email" onChange={e => setEmail(e.target.value)} value={email} />
                        <Input label="Senha" type="password" onChange={e => setPassword(e.target.value)} value={password} />
                        <a href="">Esqueci minha senha</a>
                        <Button onClick={(event) => handleSignIn(event)}>Entrar</Button>
                    </FormContainer>

                    <CreateAccountContainer>
                        Não possui uma conta? 
                        <strong onClick={() => navigate("/register")}> Entre na comunidade</strong>
                    </CreateAccountContainer>

                </FirstColumn>
                <SecondColumn>
                    <img src={loginImg} alt="" />
                </SecondColumn>
            </SignInContainer>
        </Container>
    )
}