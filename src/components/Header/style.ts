import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 2rem;


    img {
        max-width: 10rem;
        margin-left: 1rem;
    }
`
export const Menu = styled.nav`
        display: flex;
        align-items: center;
        gap: 1.75rem;
        margin-right: 1rem;

        li {
            list-style: none;
            font-size: 0.875rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.GRAY};
            cursor: pointer;

            &:hover {
                color: ${({ theme }) => theme.COLORS.PINK_100};
            }
        }

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY};
            cursor: pointer;

            &:hover {
                color: ${({ theme }) => theme.COLORS.PINK_100};
            }
        }
`