import {SEND_MESSAGE, INIT_MESSAGES} from '../constants'

const messages = [
  {id: 5, text: 'Сообщение 1'},
  {id: 7, text: 'Сообщение 2'},
  {id: 8, text: 'Ещё один пример сообщения'}
];

export default (messagesState = messages, action) => {
  const {type, payload} = action;

  switch (type) {
    case SEND_MESSAGE+"_END": {
      return payload.response.data;
    }
    case INIT_MESSAGES+"_END": {
      return payload.response.data;
    }
  }

  return messagesState;
}