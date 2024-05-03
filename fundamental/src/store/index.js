import {combineReducers} from 'redux'
import { counterReducer } from './counter'
import { messageReducer } from './message'
import { whislistReducer } from './whislist'

export const reducers = combineReducers({
    counter: counterReducer,
    message: messageReducer,
    whislist: whislistReducer
})