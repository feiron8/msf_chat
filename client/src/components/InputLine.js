import React from 'react'
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {sendMessageAction} from '../ac';

class InputLine extends React.Component {
  state = {
    text: ''
  };

  render() {
    console.log('render');

    return (
      <form noValidate autoComplete="off">
        <TextField
          id="message"
          label="Введите сообщение..."
          onChange={this.handleChange}
          value={this.state.text}
          margin="normal"
        />
        <Button onClick={this.handleClick} variant="contained">
          Отправить
        </Button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    console.log(this.props.session);
    console.log(this.props.currentProject);
    this.props.sendMessage(this.props.currentProject.get('currentProject'), this.props.session.get('userId'), this.state.text);
  }
}

const mapDispatchToProps = {
  sendMessage: sendMessageAction
};

export default connect((storeState) => ({
  session: storeState.session,
  currentProject: storeState.currentProject
}), mapDispatchToProps)(InputLine)