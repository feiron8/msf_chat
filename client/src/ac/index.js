import {SEND_MESSAGE} from '../constants'

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