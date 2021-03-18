import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
import {createLogger} from 'redux-logger'

const reduxThunk=thunk.withExtraArgument(rootReducer)
const logger=createLogger({logger:console})

let middlewares=[]
    middlewares.push(reduxThunk)
    // middlewares.push(logger)

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enchancers=composeEnhancers(applyMiddleware(...middlewares))


// (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
export const store = createStore(rootReducer,enchancers);


export default store;
