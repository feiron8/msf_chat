import {createSelector} from 'reselect';

export const documents = state => state.documents;
export const messages = state => state.messages;
export const contacts = state => state.contacts;

export const filteredContacts = createSelector(contacts,(contacts) => {
    return contacts;
});