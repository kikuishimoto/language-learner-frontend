import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import phraseReducer from './phraseReducer'

export default combineReducers({
    categoriesReducer,
    phraseReducer
})