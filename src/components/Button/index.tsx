import { ComponentProps, ReactNode } from "react"
import './style.css'

interface IButtonProps extends ComponentProps<'button'>{
    children?: ReactNode;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
    return  <button className="btn-operation" {...rest}>
                {children}
            </button>
}