import {ADD_CONTACT, REMOVE_CONTACT} from '../constants'

const contacts = [
  {id: 5, title: 'Innokenty Smoktunovski'},
  {id: 7, title: 'Entro Berd'},
  {id: 8, title: 'Lorem Ipsum'}
];

export default (contactsState = contacts, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_CONTACT: {
      return contactsState.concat(action.payload.contact);
    }
    case REMOVE_CONTACT: {
      return contactsState;
    }
  }

  return contactsState;
}