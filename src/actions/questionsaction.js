export const fetchQuestion = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/questions')
        .then(resp => resp.json())
        .then(question => dispatch({ type: 'FETCH_QUESTION', payload: question}))
    }
}

export const addQuestion = (question) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/questions', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(question => dispatch({ type: 'ADD_QUESTION', payload: question}))
    }
}