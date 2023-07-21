import { LogOption } from '@/types/AuthTypes'
import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    value: LogOption.LOGIN
}

const AuthOptionSlice = createSlice({
    name: 'authOptionState',
    initialState,
    reducers: {
        setOption: (state, action) => {
            state.value = action.payload
        }
    }
})

export default AuthOptionSlice.reducer
export const { setOption } = AuthOptionSlice.actions
// Path: src/store/Auth/AuthOptionSlice.ts