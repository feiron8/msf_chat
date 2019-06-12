import {combineReducers} from 'redux';
import messagesReducer from './messages';
import contactsReducer from './contacts';
import documentsReducer from './documents';

export default combineReducers({
  messages: messagesReducer,
  contacts: contactsReducer,
  documents: documentsReducer
})