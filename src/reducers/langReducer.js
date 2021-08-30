export const langReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_LANG':
            return action.payload
        case 'ADD_LANG':
            return [...state, action.payload]                   
        default:
            return state 
    }
}