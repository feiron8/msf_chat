import {SEND_MESSAGE, SIGN_UP, SIGN_IN} from '../constants'

export function sendMessageAction(text) {
  return {
    type: SEND_MESSAGE,
    payload: {
      message: {
        id: Math.random(),
        text: text
      }
    }
  }
}

export function registerAction(user) {
  return {
    type: SIGN_UP,
    payload: {
      data: user
    },
    request: true,
    url: "/api/signup",
    method: "post"
  }
}

export function authAction(user) {
  return {
    type: SIGN_IN,
    payload: {
      data: user
    },
    request: true,
    url: "/api/signin",
    method: "post"
  }
}