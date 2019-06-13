import {SIGN_IN,SIGN_OUT} from '../constants'
import {Map} from 'immutable'

const defaultSession = Map({
  token: null,
  isAuthenticated: false
});

export default (sessionState = defaultSession, action) => {
  const {type, payload} = action;
  console.log(payload);

  switch (type) {
    case SIGN_IN + "_END": {
      return sessionState.set('token', 'fdjsklgjfd').set('isAuthenticated', true);
    }
    case SIGN_OUT: {
      return sessionState.set('token', null).set('isAuthenticated', false);
    }
  }

  return sessionState;
}