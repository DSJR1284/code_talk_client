export const fetchLang = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/languages')
        .then(resp => resp.json())
        .then(lang => dispatch({ type: 'FETCH_LANG', payload: lang}))
    }
}

export const addLang = (lang) => {
    console.log(lang)
    return dispatch => {
        fetch('http://127.0.0.1:3000/languages', {
            method: 'POST',
            body: JSON.stringify(lang),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(lang => dispatch({ type: 'ADD_LANG', payload: lang}))
    }
}

export const deleteLang = (lang) => {
    console.log(lang)
    return dispatch => {
        fetch('http://127.0.0.1:3000/languages', {
            method: 'DELETE',
            body: JSON.stringify(lang),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(lang => dispatch({ type: 'DELETE_LANG', payload: lang}))
    }
}


