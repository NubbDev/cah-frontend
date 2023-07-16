"use client"
import Input from "@/components/layout/AuthInput"
import Button from "@/components/layout/Button"
import { ButtonStyles } from "@/types/ButtonStyles"
import { useState } from "react"

export default () => {
    const [username, setUsername] = useState()

    return (
        <form>
            <Input type="email" placeholder="email" label="Email" required/>
            <Input type="text" placeholder="username" label="Username" required/>
            <Input type="password" pattern="" placeholder="password" label="Password" required/>
            <Input type="password" pattern="" placeholder="password" label="Confirmed Password" required/>
            <Button setStyle={ButtonStyles.Primary} type="submit">Continue</Button>
        </form>
    )
}