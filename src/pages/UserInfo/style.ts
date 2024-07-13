import styled from "styled-components"

export const ReposContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`
export const ReposTitle = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 20px;
    padding: 50px 100px;
    max-width: 1200px;
    color: ${({ theme }) => theme.COLORS.BLUE};
`
export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: flex-start;
    gap: 20px;
    margin: 0px 100px;
    height: 70vh;
`

export const RepoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 15rem;
    max-height: 10rem;
    gap: 10px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
    background-size: cover;
`

export const ReposText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.OPACITY_GRAY};
    backdrop-filter: blur(10px);
    color: ${({ theme }) => theme.COLORS.WHITE};
    h2 {
        font-size: 1rem;
    }
    p {
        font-size: 0.8rem;
    }
    a {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.PINK_100};
        padding: 5px;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
}
`
