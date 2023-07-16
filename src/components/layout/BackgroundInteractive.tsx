'use client'
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react'

const BgInteractive:React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const [curX, setCurX] = useState(0)
    const [curY, setCurY] = useState(0)
    const [tgX, setTgX] = useState(0)
    const [tgY, setTgY] = useState(0)

    useEffect(() => {
        const move = () => {
            setCurX(curX + (tgX - curX) / 20)
            setCurY(curY + (tgY - curY) / 20)

            requestAnimationFrame(move)
        }

        window.addEventListener('mousemove', (e) => {
            setTgX(e.clientX)
            setTgY(e.clientY)
        })

        move()
    })

    return (
        <div {...props} style={{
            transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
        }}/>
    )
};

export default BgInteractive