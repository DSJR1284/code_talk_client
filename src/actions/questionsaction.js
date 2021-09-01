export const fetchQuestion = () => {
    debugger
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/questions')
        .then(resp => resp.json())
        .then(descriptions => dispatch({ type: 'FETCH_QUESTIONS', payload: descriptions}))
    }
}

export const addQuestion = (description) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/questions', {
            method: 'POST',
            body: JSON.stringify(description),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(description => dispatch({ type: 'ADD_QUESTION', payload: description}))
    }
}