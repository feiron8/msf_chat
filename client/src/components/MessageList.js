import React from 'react';
import PropTypes from 'prop-types';
import "./MessageList.css";
import {connect} from 'react-redux';
import { MessageList as Messages } from 'react-chat-elements';

class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.array
  };

  render() {
    const messages = this.props.messages.map(function(message) {
      return {
        position: 'right',
        type: 'text',
        text: message.text,
        date: new Date()
      };
    });

    return (
        <Messages
            className='MessageList'
            lockable={true}
            dataSource={messages} />
    );
  }
}

const mapStateToProps = (storeState) => ({
  messages: storeState.messages
});

export default connect(mapStateToProps)(MessageList)