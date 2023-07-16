"use client"
import Input from "@/components/layout/AuthInput"
import Button from "@/components/layout/Button"
import { ButtonStyles } from "@/types/ButtonStyles"
import { useState } from "react"

export default () => {
    const [username, setUsername] = useState()

    return (
        <form>
            <Input type="text" label="Username / Email" name="username" placeholder="john doe" required/>
            <Input type="password" label="Password" name="password" placeholder="password" required/>
            <Button setStyle={ButtonStyles.Success} type="submit">Sign In</Button>
        </form>
    )
}