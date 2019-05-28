import {SEND_MESSAGE, EDIT_MESSAGE} from '../constants'

const messages = [
  {id: 5, text: 'hello Dimitri'},
  {id: 7, text: 'my name is Boris'},
  {id: 8, text: 'gde vashi dokozatelstva'}
];

export default (messagesState = messages, action) => {
  const {type, payload} = action;

  switch (type) {
    case SEND_MESSAGE: {
      return messagesState.concat(action.payload.message);
    }
    case EDIT_MESSAGE: {
      return messagesState;
    }
  }

  return messagesState;
}