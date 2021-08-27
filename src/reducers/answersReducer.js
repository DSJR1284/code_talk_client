export const answersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ANSWERS':
            return action.payload
        default:
            return state 
    }
}