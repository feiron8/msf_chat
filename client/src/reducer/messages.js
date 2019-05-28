export default (messagesState = [], action) => {
  switch (action.type) {
    case 'MESSAGE_SENT': {
      return messagesState.push(action.payload.message);
    }
    case 'MESSAGE_EDIT': {
      return messagesState;
    }
  }

  return messagesState;
}