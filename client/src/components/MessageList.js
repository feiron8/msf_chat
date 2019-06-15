import React from 'react';
import PropTypes from 'prop-types';
import "./MessageList.css";
import {connect} from 'react-redux';
import { MessageList as Messages } from 'react-chat-elements';
import {initMessagesAction} from "../ac";

class MessageList extends React.Component {
  render() {
    let messages = [];
    if (this.props.messages) {
      messages = this.props.messages.map(function(message) {
        return {
          position: (this.props.session.get('userId') === message.AuthorId ? 'right' : 'left'),
          type: 'text',
          text: message.Text,
          date: new Date(message.Time)
        };
      });
    }

    return (
        <Messages
            className='MessageList'
            lockable={true}
            dataSource={messages} />
    );
  }

  componentDidMount() {
    this.props.initMessages(this.props.currentProject.get('currentProject'));
  }
}

const mapStateToProps = (storeState) => ({
  messages: storeState.messages,
  projects: storeState.projects,
  session: storeState.session,
  currentProject: storeState.currentProject
});

export default connect(mapStateToProps, {
  initMessages: initMessagesAction
})(MessageList)