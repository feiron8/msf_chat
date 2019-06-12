import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import request from '../middlewares/request'

const enchancer = applyMiddleware(logger, request);

const store = createStore(reducer, enchancer);

window.store = store;

export default store