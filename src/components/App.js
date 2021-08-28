import React from 'react'
import Router from './Router'
import Nav from './Nav'
import LangContainer from './LangContainer'

const App = () => {
    return (
        <div>
            <Nav />
            <LangContainer />
            <Router />
        </div>
    )
}

export default App;