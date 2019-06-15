import {SIGN_IN,SIGN_OUT} from '../constants'
import {Map} from 'immutable'

const defaultSession = Map({
  userId: null,
  token: null,
  isAuthenticated: false
});

export default (sessionState = defaultSession, action) => {
  const {type, payload} = action;

  switch (type) {
    case SIGN_IN + "_END": {
      if (payload.response.data.isExist) {
        return sessionState.set('token', payload.response.data.token).set('isAuthenticated', true).set('userId', payload.response.data.userId);
      } else {
        return sessionState.set('token', null).set('isAuthenticated', false).set('userId', null);
      }
    }
    case SIGN_OUT: {
      return sessionState.set('token', null).set('isAuthenticated', false).set('userId', null);
    }
  }

  return sessionState;
}