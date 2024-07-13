import styled from "styled-components"

export const SecurityElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    box-shadow: 0 0 5px 0px ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    border-radius: 5px;
    padding: 20px;

    img{
        width: 100px;
        height: 100px;
        border-radius: 9999px;
    }

    &:nth-child(4){
        flex-direction: row;
        gap: 20px;
    }

    h2 {
        font-size: 1rem;
    }
`

export const SecurityTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`

export const SecurityLabel = styled.label`
    font-size: 0.875rem;
    font-weight: 500;
`

export const SecurityInput = styled.input`
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #ccc;
`
export const SecurityCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 1rem;
`

export const SecurityContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    max-width: 700px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const SecurityButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    border: none;
    background-color: transparent;
    cursor: pointer;
    align-self: flex-end;

    &:hover{
        color: ${({ theme }) => theme.COLORS.PINK_200};
    }
`

export const OptionLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
`