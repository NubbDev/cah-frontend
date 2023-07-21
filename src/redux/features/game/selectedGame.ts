import { GameType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:GameType = {
    id: 0,
    name: '',   
    started: false,
    players: [],
    maxPlayers: 0,
    goal: 0,
    cards: [],
    host: {
        id: 0,
        name: ''
    }
}

const SelectedGameSlice = createSlice({
    name: 'selectedGameState',
    initialState,
    reducers: {
        setGame: (state, {payload}) => {
            console.log('setGame action', payload)
            state = payload
        }
    }
})

export default SelectedGameSlice.reducer
export const { setGame } = SelectedGameSlice.actions