export const fetchAnswers = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/answers')
        .then(resp => resp.json())
        .then(answers => dispatch({ type: 'FETCH_ANSWERS', payload: answers}))
    }
}

export const addAnswer = (answer) => {
    console.log(answer)
    return dispatch => {
        fetch('http://127.0.0.1:3000/answers', {
            method: 'POST',
            body: JSON.stringify(answer),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(answer => dispatch({ type: 'ADD_ANSWER', payload: answer}))
    }
}