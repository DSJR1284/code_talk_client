import { combineReducers } from 'redux'
import { usersReducer } from './usersReducers'
import { langReducer } from './langReducer'
import { questionsReducer } from './questionsReducer'
import { answersReducer } from './answersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    lang: langReducer,
    questions: questionsReducer,
    answers: answersReducer
})

