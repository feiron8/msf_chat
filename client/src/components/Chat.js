import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import {connect} from 'react-redux';

class Chat extends React.Component {
  render() {
    return (

      <MessageList/>
    );
  }
}

export default Chat