import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = (preloadedState) => configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store