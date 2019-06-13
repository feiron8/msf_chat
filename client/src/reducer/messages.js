import {SEND_MESSAGE, EDIT_MESSAGE} from '../constants'

const messages = [
  {id: 5, text: 'Сообщение 1'},
  {id: 7, text: 'Сообщение 2'},
  {id: 8, text: 'Ещё один пример сообщения'}
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