import { ComponentProps } from "react";

interface IinputProps extends ComponentProps<'input'> {
    label: string;
    name: string;
}

export const Input = ({ name, label, ...rest }: IinputProps) => {
    return (
        <div className="btn-container">
            <label htmlFor={name}>{label}</label>

            <input {...rest} name={name}/>
        </div>   
    );
};