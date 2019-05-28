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
    this.props.sendMessageAction(this.state.text);
  }
}

const mapDispatchToProps = {
  sendMessageAction
};

export default connect(null, mapDispatchToProps)(InputLine)