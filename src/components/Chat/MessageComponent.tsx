import { FC } from "react";
import style from '@/styles/components/Chat/MessageComp.module.css'
import { type } from "os";

export interface MessageComponentProps {
    sender: string
    message: string
    color?: string
}

const MessageComponent:FC<MessageComponentProps> = (props) => {

    return (
        <div className={style.container}>
            <span style={{color: props.color}} className={style.sender}>{props.sender}</span>
            <span className={style.message}>: {props.message}</span>
        </div>
    )
}

export default MessageComponent