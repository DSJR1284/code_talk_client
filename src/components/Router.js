import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Hub from './Hub'
import About from './About'
// import Logout from './logout'


const Router = () => {
    return(
    <Switch>
        <Route exact path='/hub' component={Hub}/>
        <Route exact path='/about' component={About}/>
        {/* <Route exact path='/logout' component={Logout}/> */}
    </Switch>
    )
}

export default Router;