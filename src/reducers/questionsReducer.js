// export const questionsReducer = (state = [], action) => {
//     // console.log(action.payload)
//     switch(action.type){
//         case 'FETCH_QUESTIONS':
//             const newQuestions = Object.assign(
//                 [],action.payload
//             )
//             return {
//                 ...state,
//                 question: newQuestions
//             }
//         case 'ADD_QUESTION':
//             return {
//                 ...state,
//                 question: [...state.question, action.payload]
//             }
//         default:
//             return state 
//     }
// }

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