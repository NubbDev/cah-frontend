'use client'

import { setGame } from "@/redux/features/game/selectedGame";
import { GameType } from "@/types";
import { FC } from "react";
import { useDispatch } from "react-redux";
import style from '@/styles/components/GamesSection/GameComp.module.css'
import { useAppSelector } from "@/redux/store";

export interface GameProps extends GameType {
    className?: string
    handler: (id: number) => void
}

const Game: FC<GameProps> = (props) => {

    const dispatch = useDispatch()
    const gameSelected = useAppSelector(state => state.selectedGame)

    const {className, handler ,...rest} = props
    const model = {
        id: props.id,
        host: props.host,
        name: props.name,
        maxPlayers: props.maxPlayers,
        players: props.players,
        cards: props.cards,
        goal: props.goal,
        started: props.started,
    } as GameType

    const clickHandler = () => {
        console.log(model)
        dispatch(setGame(model))
        handler(props.id)
        console.log(gameSelected)
    }

    if (gameSelected.id === props.id) {
        return (
            <div onClick={clickHandler} className={`${style.container} ${style.selected}`}>
                <h3>{props.name}</h3>
                <span>{props.players.length} / {props.maxPlayers}</span>
            </div>
        )
    }

    return (
        <div onClick={clickHandler} className={style.container}>
            <h3>{props.name}</h3>
            <span>{props.players.length} / {props.maxPlayers}</span>

        </div>
    )
}

export default Game;