import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ChatList } from 'react-chat-elements';
import "./ContactsList.css"

class ContactsList extends React.Component {
  static propTypes = {
    contacts: PropTypes.array
  };

  render() {
    const contacts = this.props.contacts.map(function(contact) {
      return {
        className: "ContactsList__item",
        avatar: 'https://picsum.photos/100',
        alt: contact.title,
        title: contact.title,
        subtitle: contact.title,
        date: new Date(),
        unread: 0
      }
    });

    return (
      <ChatList
          className='chat-list'
          dataSource={contacts} />
    );
  }
}

const mapStateToProps = (storeState) => ({
  contacts: storeState.contacts
});

export default connect(mapStateToProps)(ContactsList)