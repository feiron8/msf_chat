import {ADD_PROJECT, INIT_PROJECT, REMOVE_PROJECT} from '../constants'

const projects = [
  {Id: 5, Title: 'Innokenty Smoktunovski', Description: "hello", Milestone: "Envisioning", Iteration: 0},
];

export default (projectsState = projects, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_PROJECT+"_END": {
      return payload.response.data;
    }
    case REMOVE_PROJECT+"_END": {
      return payload.response.data;
    }
    case INIT_PROJECT+"_END": {
      return payload.response.data;
    }
  }

  return projectsState;
}