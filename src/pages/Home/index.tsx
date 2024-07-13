import comunidadeImg from '../../assets/comunidade.png';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {About, Creator, CreatorsContent, Hero, CreatorCard, CreatorText, NumberMembers, CommunityInfo, HomeContainer } from "./style";
import { BiCalendar, BiGroup, BiNetworkChart } from 'react-icons/bi';
import { MdDeveloperMode } from 'react-icons/md';

type HomeProps = {
    validated?: boolean
}
export function Home<HomeProps>({validated = false}) {

    const creators = [ 
        {
            "id": 1,
            "name": "Julia", 
            "about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            "photo": "https://github.com/julia.png"
        }, 
        {
            "id": 2,
            "name": "Tatiana", 
            "about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            "photo": "https://github.com/tatiana.png"
        }, 
        {
            "id": 3,
            "name": "Taís", 
            "about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            "photo": "https://github.com/tais.png"
        }, 
        {
            "id": 4,
            "name": "Marília", 
            "about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            "photo": "https://github.com/marilia.png"
        }
    ]

return (
    <HomeContainer>
        <Header validated={validated} />

        <Hero>
            <div>
                <h1>Comunidade exclusiva para mulheres na tecnologia</h1>
                <h2>Ambiente seguro e inspirador, fortalecendo a diversidade feminina.</h2>
            </div>
            <img src={comunidadeImg} alt="" />
        </Hero>

        <About>
            <NumberMembers>
                <h3>1000+</h3>
                <p>Membros na comunidade</p>
            </NumberMembers>
            <CommunityInfo>
                <h3>Sobre</h3>

                <p>Aqui, nós celebramos, empoderamos e conectamos mulheres na tecnologia. Nossa comunidade exclusiva oferece um espaço seguro e inspirador onde você pode crescer, compartilhar conhecimentos e construir uma rede de apoio com outras mulheres incríveis.</p>

                <ul>
                    <li><MdDeveloperMode size={25} color={'#8f3b76'} /> Conecte-se com mulheres na tecnologia</li>
                    <li><BiCalendar size={25} color={'#8f3b76'} /> Participe de eventos exclusivos</li>
                    <li><BiGroup size={25} color={'#8f3b76'} /> Compartilhe conhecimentos e experiências</li>
                    <li><BiNetworkChart size={25} color={'#8f3b76'} /> Construa uma rede de apoio</li>
                </ul>
            </CommunityInfo>
        </About>

        <Creator>
            <h3>Criadoras da comunidade</h3>

            <CreatorsContent>
                {creators.map(creator => (
                    <CreatorCard key={creator.id} image={creator.photo}>
                        <CreatorText>
                            <h4>{creator.name}</h4>
                            <p>{creator.about}</p>
                        </CreatorText>
                    </CreatorCard>
                ))}
            </CreatorsContent>
        </Creator>

        <Footer />
    </HomeContainer>
)}