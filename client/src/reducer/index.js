import {combineReducers} from 'redux';
import messagesReducer from './messages';
import contactsReducer from './contacts';
import documentsReducer from './documents';
import sessionReducer from './session';

export default combineReducers({
  messages: messagesReducer,
  contacts: contactsReducer,
  documents: documentsReducer,
  session: sessionReducer
})