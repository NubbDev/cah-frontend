"use client"

import { useAppSelector } from "@/redux/store"
import { LogOption } from "@/types/AuthTypes"
import GuestForm from "./forms/Guest"
import SignIn from "./forms/SignIn"
import Register from "./forms/Register"

import style from "@/styles/components/auth/FormStyle.module.css"

export default () => {
    const authOption = useAppSelector((state) => state.authOption.value)
    return (
        <div className={style.container}>
            {authOption == LogOption.GUEST && <GuestForm/>}
            {authOption == LogOption.LOGIN && <SignIn/>}
            {authOption == LogOption.REGISTER && <Register/>}
        </div>
    )
}