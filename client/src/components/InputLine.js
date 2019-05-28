import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputLine extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      text: ''
    }
  }

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
    console.log('click');
  }
}

export default InputLine