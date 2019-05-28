import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Message extends React.Component {
  render() {
    const {text} = this.props.message;

    return (
      <Paper>
          <Typography component="p">
            {text}
          </Typography>
      </Paper>
    );
  }
}

export default Message