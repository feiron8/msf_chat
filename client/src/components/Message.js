import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Message extends React.Component {
  render() {
    return (
      <Paper>
          <Typography component="p">
            {this.props.Text}
          </Typography>
      </Paper>
    );
  }
}

export default Message