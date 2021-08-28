import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Hub from './Hub'
import About from './About'


const Router = () => {
    return(
    <Switch>
        {/* <Route exact path='/About' /> */}
        <Route exact path='/hub' component={Hub}/>
        <Route exact path='/about' component={About}/>
    </Switch>
    )
}

export default Router;