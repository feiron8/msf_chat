import {SEND_MESSAGE, SIGN_UP, SIGN_IN, ADD_PROJECT, INIT_PROJECT} from '../constants'

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

export function addProjectAction(project) {
  return {
    type: ADD_PROJECT,
    payload: {
      data: project
    },
    request: true,
    url: "/api/projects",
    method: "post"
  }
}

export function initProjectAction() {
  return {
    type: INIT_PROJECT,
    request: true,
    payload: {
      data: {
        userId: "userId"
      }
    },
    url: "/api/users/userId/projects",
    method: "get"
  }
}