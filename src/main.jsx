import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import myStore from './util/store'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={myStore}> <App /> </Provider>
)
