export const fetchLang = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/languages')
        .then(resp => resp.json())
        .then(lang => dispatch({ type: 'FETCH_LANG', payload: lang}))
    }
}

export default fetchLang;