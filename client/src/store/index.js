import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'

const enchancer = applyMiddleware(logger);

const store = createStore(reducer, enchancer);

window.store = store;

export default store