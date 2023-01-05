import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Reducers/index";
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)