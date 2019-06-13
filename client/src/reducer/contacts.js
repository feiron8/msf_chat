import {ADD_PROJECT, INIT_PROJECT, REMOVE_PROJECT} from '../constants'

const projects = [
  {id: 5, title: 'Innokenty Smoktunovski'},
  {id: 7, title: 'Entro Berd'},
  {id: 8, title: 'Lorem Ipsum'}
];

export default (projectsState = projects, action) => {
  const {type, payload} = action;

  // switch (type) {
  //   case ADD_PROJECT+"_END": {
  //     return payload.response.data;
  //   }
  //   case REMOVE_PROJECT+"_END": {
  //     return payload.response.data;
  //   }
  //   case INIT_PROJECT+"_END": {
  //     return payload.response.data;
  //   }
  // }

  return projectsState;
}