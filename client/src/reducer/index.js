import {combineReducers} from 'redux';
import messagesReducer from './messages';
import contactsReducer from './contacts';

export default combineReducers({
  messages: messagesReducer,
  contacts: contactsReducer
})