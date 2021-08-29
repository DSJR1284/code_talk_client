export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return action.payload
            case 'ADD_USER':
                console.log(action.payload)
            return [...state, action.payload]
        default:
            return state 
    }
}