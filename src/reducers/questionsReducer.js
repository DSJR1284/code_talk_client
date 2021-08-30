export const questionsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUESTION':
            console.log(action.payload)
        break
            case 'ADD_QUESTION':
            return [...state, action.payload]
        default:
            return state 
    }
}