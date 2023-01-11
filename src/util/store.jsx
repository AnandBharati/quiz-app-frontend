import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myReducer from './authSlice';
import questionReducer from './questionSlice';
import qBankReducer from './quesBankSlice'

const reducers = combineReducers({
    authReducer : myReducer, 
    questionReducer,
    qBankReducer,
})

const myStore = configureStore({
    reducer: reducers,
})

export default myStore;