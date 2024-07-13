import styled from "styled-components"

export const ProfileContent = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`
export const ProfileContainer = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
`
export const NavProfile = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    margin: 20px;
    padding: 5px;
    max-width: 400px;

    li {
        list-style: none;
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: ${({ theme }) => theme.COLORS.PURPLE};
        }

        &:last-child {
            color: red;
            margin-top: 40px;
            
            &:hover {
                color: maroon;
                background-color: transparent;
            }
        }
    }
`

export const PeopleStatus = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    max-width: 400px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
`

export const PersonStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 5px;
    position: relative;

    img {
        width: 40px;
        height: 40px;
        border-radius: 9999px;
        
    }
`
export const StatusInfo = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 0.875rem;
    }
`

export const StatusCircle = styled.div`
    content: '';
    position: absolute;
    left: 40px;
    top: 40px;
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.COLORS.ONLINE};
`



