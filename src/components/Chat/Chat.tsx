'use client'

import React, { useState, useEffect, FC } from 'react'
import ChatInput from './ChatInput'
import style from '@/styles/components/Chat/Chat.module.css'
import MessageComponent, { MessageComponentProps } from './MessageComponent'
import useWebSocket from 'react-use-websocket'

export interface ChatProps {
    channel: string
}


const Chat:FC<ChatProps> = (props) => {

    const [connected, setConnected] = useState<boolean>(false)
    
    const url = 'ws://192.168.1.90:8080/socket/chat/global';
    const {
        sendJsonMessage,
        lastJsonMessage,
    } = useWebSocket(url, {
        onOpen: async () => {
            // console.log('Chat component mounted')
            console.log('Chat websocket opened')
            setConnected(true)

        },
    })
    useEffect(() => {
        lastJsonMessage
    })


    const handleMessageSending = (message:string) => {
        console.log(message)
        sendJsonMessage({
            message: message
        })

    }

    const messages:MessageComponentProps[]  = [
        {
            sender: 'Nubb',
            message: 'Smile spoke total few great had never their too. Amongst moments do in arrived at my replied. Fat weddings servants but man believed prospect.',
            color: "red"
        },
        {
            sender: 'Cream',
            message: 'In entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough points. Miles at smart ﻿no marry whole linen mr. Income joy nor can wisdom summer.',
            color: "blue"
        },
        {
            sender: 'Seb',
            message: "May musical arrival beloved luckily",
            color: "green"
        },
        {
            sender: 'Crazy',
            message: 'Hello World!',
            color: "yellow"
        },
    ]
    return (
        <section className={style.container}>
            <div className={style.title_container}>
                <h3>{props.channel} Chat</h3>
            </div>
            <div className={style.message_container}>
                {messages.map((message, index) => {
                    return (
                        <MessageComponent key={index} {...message}/>
                    )
                })}
            </div>
            <div className={style.input_container}>
                <ChatInput handler={handleMessageSending} connected={connected}/>
            </div>
        </section>
    )
}

export default Chat