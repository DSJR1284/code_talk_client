import { combineReducers } from 'redux'
import { usersReducer } from './usersReducers'
import { questionsReducer } from './questionsReducer'
import { answersReducer } from './answersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    answers: answersReducer
})

