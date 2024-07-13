import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    width: 100%;
`
export const FooterContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    
    img {
        max-width: 10rem;
        margin-left: 1rem;
    }
`