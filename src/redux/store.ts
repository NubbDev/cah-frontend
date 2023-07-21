import {
     configureStore,
} from '@reduxjs/toolkit'
import AuthOptionSlice from './features/Auth/AuthOptionSlice'
import SelectedGameSlice from './features/game/selectedGame'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const store = configureStore({
    reducer: {
        authOption: AuthOptionSlice,
        selectedGame: SelectedGameSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

export default store