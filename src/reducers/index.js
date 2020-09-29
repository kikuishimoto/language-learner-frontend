import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import phraseReducer from './phraseReducer'
import tutorsReducer from './tutorsReducer'

export default combineReducers({
    categoriesReducer,
    phraseReducer,
    tutorsReducer
})