import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import phraseReducer from './phraseReducer'
import tutorsReducer from './tutorsReducer'
import listsReducer from './listsReducer'

export default combineReducers({
    categoriesReducer,
    phraseReducer,
    tutorsReducer,
    listsReducer
})