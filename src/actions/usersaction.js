export const fetchUser = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'FETCH_USER', payload: user}))
    }
}

export const addUser = (user) => {
    console.log(user)
    return dispatch => {
        fetch('http://127.0.0.1:3000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'ADD_USER', payload: user}))
    }
}
