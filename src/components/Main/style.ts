import styled from "styled-components"

export const ProfileElements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    box-shadow: 0 0 5px 0px ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    border-radius: 5px;
    padding: 20px;

    textarea {
        padding: 5px;
        border: none;
        height: 100px;
        overflow: hidden;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        resize: none;

    }

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
export const TechnologiesContainer = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`

export const ProfileTitle = styled.h1`
    font-size: 1rem;
    margin-bottom: 20px;
    padding-right: 10px;
    width: max-content;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.PINK_100};
`

export const ProfileInput = styled.input`
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    padding: 10px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #ccc;
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    max-width: 700px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const ProfileButton = styled.button`
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

export const ProfileLabel = styled.label`
    font-size: 0.875rem;
    font-weight: 500;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    width: 50%;
    gap: 10px;
`

export const Tag = styled.span`
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    color: #fff;
    padding: 5px;
    margin: 5px;
    font-size: 12px;
    border-radius: 5px;
`

export const ElementContent = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    input {
        padding: 5px;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    h2 {
        font-size: 1rem;        
    }
    h3 {
        input {
            font-size: 0.875rem;
        }
    }
`