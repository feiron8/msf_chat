import {combineReducers} from 'redux';
import messagesReducer from './messages';
import contactsReducer from './contacts';
import documentsReducer from './documents';
import sessionReducer from './session';
import currentProjectReducer from './currentProject'

export default combineReducers({
  messages: messagesReducer,
  projects: contactsReducer,
  documents: documentsReducer,
  session: sessionReducer,
  currentProject: currentProjectReducer
})