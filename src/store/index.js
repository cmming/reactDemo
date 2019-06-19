import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware';
import service from '../api/index'
import reducers from "./reducer"

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(reducers, compose(
    applyMiddleware(thunk,axiosMiddleware(service)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store