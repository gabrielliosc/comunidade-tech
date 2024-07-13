import { ButtonContainer } from './style'
interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}


export function Button({ children, ...rest }: buttonProps) {
    return (
        <ButtonContainer {...rest}>
            {children}
        </ButtonContainer>
    )
}