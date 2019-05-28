import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message'
import InputLine from "./InputLine";
import {connect} from 'react-redux';

class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.array
  };

  render() {
    const messages = this.props.messages.map(function(message) {
      return <li><Message id={message.id} message={message}/></li>
    });

    return (
      <div className="message-list">
        <ul>
          {messages}
        </ul>
        <InputLine/>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => ({
  messages: storeState.messages
});

export default connect(mapStateToProps)(MessageList)