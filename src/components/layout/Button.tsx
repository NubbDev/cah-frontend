"use client"

import { ButtonStyles } from "@/types/ButtonStyles"
import { FC } from "react"
import style from '@/styles/components/layout/Button.module.css'
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    setStyle: ButtonStyles
}

const Button: FC<ButtonProps> = (props) => {
    const {setStyle, ...rest} = props
    return (
        <button className={`${style.button} ${style[setStyle]}`} {...rest}>
            {rest.children}
        </button>
    )   
}

export default Button