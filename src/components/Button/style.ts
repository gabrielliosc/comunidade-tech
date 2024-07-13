import styled from "styled-components"

export const ButtonContainer = styled.button`
    background-color: ${({ theme }) => theme.COLORS.PINK_200};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.PINK_300};
    }
`