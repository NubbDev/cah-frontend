'use client'
import React, { useState, useEffect, FC } from 'react'
import {IoSend} from 'react-icons/io5'
import Button from '../layout/Button'
import { ButtonStyles } from '@/types/ButtonStyles'
import style from '@/styles/components/Chat/ChatInput.module.css'

interface ChatInputProps {
    handler: (message:string) => void,
    connected: boolean
}

const ChatInput:FC<ChatInputProps> = (props) => {
    const [message, setMessage] = useState<string>("")

    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (message === "") return
        props.handler(message)
        setMessage("")
    }

    return (
        <form className={style.container} onSubmit={handleSubmit}>
            <div></div>
            {
                props.connected ? 
                    <textarea onChange={handleChange} value={message}></textarea>
                :
                    <textarea disabled></textarea>
            }
            <Button setStyle={ButtonStyles.Success} type='submit'>
                <IoSend />
            </Button>
        </form>
    )
}

export default ChatInput