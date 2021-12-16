import React from 'react'
import Router from './Router'
import Nav from './Nav'
import './App.css'

const App = () => {
    return (
        <div className= "app">        
        <Nav />            
        <Router />
        </div>
    )
}

export default App;