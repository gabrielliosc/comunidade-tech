import { InputContainer } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}


export function Input({label, ...rest }: InputProps) {
    return (
        <InputContainer>
            {label}
            <input {...rest} />
        </InputContainer>
    )
}