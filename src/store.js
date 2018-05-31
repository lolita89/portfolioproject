// #3 USING REDUX => Import store from redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
applyMiddleware(ReduxThunk),
devTools
)

// #4 USING REDUX => Create store
// #8 USING REDUX => Pass function reducer into createStore
const store =  createStore(reducer);

export default store