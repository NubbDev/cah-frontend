"use client"

import Input from "@/components/layout/AuthInput"
import Button from "@/components/layout/Button"
import { ButtonStyles } from "@/types/ButtonStyles"
import { useState } from "react"

export default () => {
    const [displayName, setDisplayName] = useState('')
    const [error, setError] = useState(false)

    const nameHandler = (name: string) => {
        if (name.length < 3 || name.length > 16) {
            setError(true)
            return
        }
        setDisplayName(name)
    }

    return (
        <form>
            <Input handler={nameHandler} type="text" label="Display Name" name="displayname" placeholder="john doe" required/>
            <Button setStyle={ButtonStyles.Primary} type="submit">Continue</Button>
        </form>
    )
}