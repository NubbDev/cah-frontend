'use client'
import style from '@/styles/components/GamesSection/GamesSelection.module.css'
import Button from '../layout/Button'
import { ButtonStyles } from '@/types/ButtonStyles'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { GameType, array_move } from '@/types'
import GameComp from './GameComp'
import { useState } from 'react'

export default () => {
    const games: GameType[] = [
        {
            id: 1,
            host: {
                id: 1,
                name: "John Doe",
            },
            name: "Gamer's United",
            maxPlayers: 10,
            players: [],
            cards: [],
            goal: 10,
            started: false,
        },
        {
            id: 2,
            host: {
                id: 4,
                name: "Jane",
            },
            name: "Party Time",
            maxPlayers: 3,
            players: [],
            cards: [],
            goal: 5,
            started: true,
        }
    ]

    const [listOfGames, setListOfGames] = useState(games)

    const clickHandler = (
        gameId: number
    ) => {
        setListOfGames(array_move(listOfGames, listOfGames.findIndex((game) => game.id === gameId), 0))
        console.log(listOfGames)
    }
    return (
        <section className={style.container}>
            <div className={style['title-filter']}>
                <div className={style['title']}>
                    <h1>Games Selection</h1>
                </div>
                <div className={style['filter']}>
                    <Button setStyle={ButtonStyles.Secondary}>Filter <MdOutlineKeyboardArrowDown/> </Button>
                </div>
            </div>
            <div className={style['games_container']}>
                {listOfGames.map((game) => {
                    return (
                        <GameComp key={game.id} {...game} handler={clickHandler}/>
                    )
                })}
            </div>
            <div className={style['create-join']}>
                <Button setStyle={ButtonStyles.Primary}>Create</Button>
                <Button setStyle={ButtonStyles.Success}>Join</Button>
            </div>
        </section>
    )
}