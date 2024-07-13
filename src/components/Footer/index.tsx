import logoImg from '../../assets/m_t.png';
import { FooterContainer, FooterContent } from './style';

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <img src={logoImg} alt="" />
                <div>
                    <h5>Contato</h5>
                    <ul>
                        <li>mulheres@gmail.com</li>
                        <li>11 9999-9999</li>    
                    </ul>
                </div>
                <span>@2024 All rigths reserverd</span>
            </FooterContent>
        </FooterContainer>
    );
}