"use client"

import React, { FC, useState } from "react"
import style from "@/styles/components/layout/AuthInput.module.css"
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { IconType } from "react-icons"

export interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    handler?: (value: string) => void
    label: string,
}

const Input:FC<AuthInputProps> = (props) => {
    const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (props.handler) {
            props.handler(value)
        }
    }

    if (props.type === "password") {
        const [showPassword, setShowPassword] = useState('password')
        const [Eye, setEye] = useState(false)
        const passwordView = () => {
            if (showPassword === 'password') {
                setShowPassword('text')
                setEye(true)
            } else if (showPassword === 'text') {
                setShowPassword('password')
                setEye(false)
            }
        }

        const { handler, ...rest } = props
        return (
            <div className={style['form-group']}>
            <input className={`${style['form-control']}`} {...rest} type={showPassword} />
            <label className={`${style['form-label']}`} htmlFor={props.name}>
                {props.label}
            </label>
            {
                Eye ? <AiFillEye onClick={passwordView} className={style['show-password']}/> : <AiFillEyeInvisible onClick={passwordView} className={style['show-password']}/>
            }
        </div>
        )
    }

    const { handler, ...rest } = props
    return (
        <div className={style['form-group']}>
            <input className={`${style['form-control']}`} {...rest} onChange={valueHandler}/>
            <label className={`${style['form-label']}`} htmlFor={props.name}>
                {props.label}
            </label>
        </div>
    )
}

export default Input