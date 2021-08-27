export const langReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_LANG':
            return action.payload
        default:
            return state 
    }
}