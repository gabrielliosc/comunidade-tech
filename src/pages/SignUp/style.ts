import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: 'Roboto', sans-serif;
`

export const SignUpContainer = styled.main`
    margin: 50px auto;
    width: 85%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 20px 15px 20px 80px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 300px;
    gap: 1.125rem;
    margin-top: 3.75rem;

    a {
        align-self: flex-end;
        margin-bottom: 3.125rem;
        font-size: 0.875rem;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        &:hover {
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.PINK_100};
        }
    }
`

export const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.875rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    h2 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    img {
        max-width: 10rem;
        margin: 15px 0 50px 0;
    }
`

export const SecondColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    
    img {
        max-width: 100%;
        height: 100%;
        border-radius: 0 0 0 100px;
        object-fit: cover;
    }
`

export const AccountContainer = styled.span`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 0.875rem;
    margin-top: 1.25rem;
    max-width: 300px;
    text-align: center;

    strong {
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.PINK_200};
        
        &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.COLORS.PINK_100};
        }
    }
`