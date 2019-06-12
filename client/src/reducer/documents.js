import {ADD_DOCUMENT, REMOVE_DOCUMENT} from '../constants'

const documents = [
  {id: 5, title: 'document 1', link: "https://yandex.ru"},
  {id: 7, title: 'document 2', link: "https://yandex.ru"},
  {id: 8, title: 'document 3', link: "https://yandex.ru"}
];

export default (documentsState = documents, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_DOCUMENT: {
      return documentsState.concat(action.payload.document);
    }
    case REMOVE_DOCUMENT: {
      return documentsState;
    }
  }

  return documentsState;
}