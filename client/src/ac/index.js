import {SEND_MESSAGE, SIGN_UP, SIGN_IN, ADD_PROJECT, INIT_PROJECT, CHANGE_PROJECT, INIT_MESSAGES} from '../constants'

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

export function initProjectAction(userId) {
  return {
    type: INIT_PROJECT,
    request: true,
    payload: {
      data: {
        userId: userId
      }
    },
    url: "/api/users/" + userId + "/projects",
    method: "get"
  }
}

export function changeProjectAction(projectId) {
  return {
    type: CHANGE_PROJECT,
    payload: {
      currentProject: projectId
    }
  }
}

export function initMessagesAction(projectId) {
  return {
    type: INIT_MESSAGES,
    request: true,
    payload: {
      data: {
        projectId: projectId
      }
    },
    url: "/api/projects/" + projectId + "/messages",
    method: "get"
  }
}

export function sendMessageAction(projectId, userId, text) {
  return {
    type: SEND_MESSAGE,
    request: true,
    payload: {
      data: {
        ProjectId: projectId,
        AuthorId: userId,
        Text: text
      }
    },
    url: "/api/projects/" + projectId + "/messages",
    method: "post"
  }
}