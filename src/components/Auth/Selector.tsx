"use client"

import { useDispatch } from "react-redux"
import { setOption } from "@/redux/features/Auth/AuthOptionSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { LogOption } from "@/types/AuthTypes"
import style from '@/styles/components/Auth/Selector.module.css'

export default () => {
    const dispatch = useDispatch<AppDispatch>()
    const authOption = useAppSelector((state) => state.authOption.value)

    const Options = [
        {
            name: "Guest",
            type: LogOption.GUEST
        },
        {
            name: "Login",
            type: LogOption.LOGIN
        },
        {
            name: "Register",
            type: LogOption.REGISTER
        }
    ]
    return (
        <div className={style.container}>
            {Options.map((option, index) => {
                if (option.type == authOption) return (
                    <button key={index} className={`${style.button} ${style.selected}`}>
                        {option.name}
                    </button>
                )
                return (
                    <button key={index} className={style.button} onClick={() => {
                        dispatch(setOption(option.type))
                    }}>
                        {option.name}
                    </button>
                )
            })}
        </div>
    )
}