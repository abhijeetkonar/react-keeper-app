import {configureStore} from '@reduxjs/toolkit'
import keeperReducer from '../features/keeper/keeperSlice'

export const store = configureStore({
    reducer: keeperReducer
})
