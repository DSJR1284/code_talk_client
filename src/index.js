import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware }from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reactDom from 'react-dom'

const  store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)