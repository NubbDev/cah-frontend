import {
     configureStore,
} from '@reduxjs/toolkit'
import AuthOptionSlice from './features/Auth/AuthOptionSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const store = configureStore({
    reducer: {
        authOption: AuthOptionSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

export default store