import React from "react";
import PropTypes from "prop-types";
import MessageList from "./MessageList";
import {Input,Button} from "react-chat-elements";
import {connect} from 'react-redux';
import "./Chat.css"
import {sendMessageAction} from "../ac";

class Chat extends React.Component {
    state = {
        message: ""
    };

    render() {
        return (
            <React.Fragment>
                <MessageList/>
                <Input
                    ref='input'
                    value={this.state.message}
                    onChange={this.changeMessage}
                    className="Chat__input"
                    placeholder="Напишите сообщение..."
                    minHeight={100}
                    multiline={true}
                    rightButtons={
                        <Button
                            onClick={this.sendMessage}
                            color='white'
                            backgroundColor='black'
                            text='Отправить'/>
                    }/>
            </React.Fragment>
        );
    }

    changeMessage = (event) => {
        this.setState({message: event.target.value});
    };

    sendMessage = (event) => {
        if(this.state.message === "") return;
        this.props.sendMessageAction(this.state.message);
        this.setState({message: ""});
        this.refs.input.clear();
    };
}

const mapStateToProps = (storeState) => ({
    messages: storeState.messages
});

const mapDispatchToProps = {
    sendMessageAction: sendMessageAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)