import styled from "styled-components"

export const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};    

    input {
        padding: 0.5rem;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border: 2px;
        height: 2.5rem;
        border-radius: 5px;
        margin-top: 0.5rem;

        &:focus {
            outline: none;
            border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
        }
    }
`