import styled from "styled-components";

export const GroupsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    max-width: 700px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const GroupsContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    flex-wrap: wrap;
    gap: 20px;
`

export const GroupsTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`

export const GroupsCard = styled.div<{ image: string }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 10rem;
    width: 10rem;
    gap: 10px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
`

export const GroupsText = styled.div`
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
`

export const AddGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 10rem;
    width: 10rem;
    gap: 10px;
    border-radius: 5px;
    background-image: url("http://github.com/plus.png");
    background-size: cover;
`