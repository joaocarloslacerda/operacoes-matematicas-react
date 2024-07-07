import { ComponentProps, ReactNode } from "react"

interface IButtonProps extends ComponentProps<'button'>{
    children?: ReactNode;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
    return  <button {...rest}>
                {children}
            </button>
}