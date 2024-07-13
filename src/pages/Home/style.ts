import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100%;
`
export const Hero = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 150px;

    div {
        width: 450px;
        height: 150px;
        
        h1{
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.PINK_200};
            font-weight: 700;
            margin-bottom: 8px;
            line-height: 120%;
        }
    
        h2 {
            font-size: 1.25rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 400;
            line-height: 150%;
        }
    }

    img {
        width: 550px;
        height: 350px;
        border-radius: 5px;
        object-fit: cover;
    }
`

export const About = styled.section`
    line-height: 175%;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 150px;
    display: flex;
    gap: 50px;
    font-family: 'Inter', sans-serif;
`

export const Creator = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 150px;
    max-width: 1200px;
    line-height: 175%;

    img {
        width: 250px;
        height: 200px;
        border-radius: 5px;
        margin-bottom: 1.5rem;
        object-fit: cover;
    }

    h3 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.PINK_200};
        font-weight: 700;
        margin-bottom: 3rem;
    }

    h4 {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.PURPLE};
        font-weight: 700;
    }

    p {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-weight: 400;
        margin-bottom: 1rem;
        max-width: 250px;
    }
`

export const CreatorsContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 0 auto;
`

export const CreatorCard = styled.div<{ image: string }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 270px;
    height: 350px;
    gap: 10px;
    border-radius: 5px;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
`

export const CreatorText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.OPACITY_GRAY_200};
    backdrop-filter: blur(10px);
    
    h4 {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.PURPLE_200};
    }
    p {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`
export const NumberMembers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.PINK_300};
    background: -webkit-linear-gradient(to bottom right, #3c1053, #ad5389); 
    background: linear-gradient(to bottom right, #3c1053, #ad5389);

    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    padding: 20px;
    width: 50%;

    h3 {
        font-size: 6rem;
        font-weight: 800;
        font-style: italic;
        line-height: 7.3rem;
        padding-left: 1.5rem;
    }
    p {
        font-size: 2rem;
        font-weight: 500;
        font-style: italic;
        max-width: 800px;
        align-self: flex-end;
        padding-right: 1.5rem;
    }
`

export const CommunityInfo = styled.div`
    width: 50%;
    li {
        display: flex;
        gap: .5rem;
        font-size: 1.125rem;
        padding: .5rem 0;
    }
    h3 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.PINK_200};
        font-weight: 700;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 400;
        margin-bottom: 1rem;
    }
`