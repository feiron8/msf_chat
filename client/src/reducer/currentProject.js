import {CHANGE_PROJECT} from '../constants'
import {Map} from 'immutable'

const defaultCurrentProject = Map({
  currentProject: ""
});

export default (currentProjectState = defaultCurrentProject, action) => {
  const {type, payload} = action;

  switch (type) {
    case CHANGE_PROJECT: {
      return currentProjectState.set("currentProject", payload.currentProject)
    }
  }

  return currentProjectState;
}