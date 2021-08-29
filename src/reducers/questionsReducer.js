export const questionsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUESTIONS':
            return action.payload
            case 'ADD_QUESTION':
            return [...state, action.payload]
        default:
            return state 
    }
}