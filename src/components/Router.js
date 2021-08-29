import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import SignUp from './SignUp'
// import Login from './login'
import Hub from './Hub'
import About from './About'
import LangList from './LangList'
// import Logout from './logout'


const Router = () => {
    return(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={SignUp}/>
        {/* <Route exact path='/login' component={login}/> */}
        <Route exact path='/hub' component={Hub}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/lang' component={LangList}/>
        {/* <Route exact path='/logout' component={Logout}/> */}
    </Switch>
    )
}

export default Router;