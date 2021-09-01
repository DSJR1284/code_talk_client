import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import SignUp from './SignUp'
import LoginForm from './LoginForm'
import Hub from './Hub'
import About from './About'
import Docs from './Docs'
import Questions from './Questions'
// import Logout from './logout'


const Router = () => {
    return(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/hub' component={Hub}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/docs' component={Docs}/>
        <Route exact path='/questions' component={Questions}/>

        {/* <Route exact path='/logout' component={Logout}/> */}
    </Switch>
    )
}

export default Router;