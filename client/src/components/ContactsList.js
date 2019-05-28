import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact'
import {connect} from 'react-redux';

class ContactsList extends React.Component {
  static propTypes = {
    contacts: PropTypes.array
  };

  render() {
    const contacts = this.props.contacts.map(function(contact) {
      return <Contact id={contact.id} contact={contact}/>
    });

    return (
      <React.Fragment>
        {contacts}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (storeState) => ({
  contacts: storeState.contacts
});

export default connect(mapStateToProps)(ContactsList)