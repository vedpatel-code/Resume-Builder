import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/authSlice'

export const store = configureStore({
    reducer : {
        auth: authReducer
    }
})

// baseURL: import.meta.env.VITE_BASE_URL