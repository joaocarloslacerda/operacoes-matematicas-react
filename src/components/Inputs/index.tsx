import { ComponentProps } from "react";
import './style.css'

interface IinputProps extends ComponentProps<'input'> {
    label: string;
    name: string;
}

export const Input = ({ name, label, ...rest }: IinputProps) => {
    return (
        <div className="field-input">
            <label htmlFor={name}>{label}</label>

            <input className="field" {...rest} name={name}/>
        </div>   
    );
};