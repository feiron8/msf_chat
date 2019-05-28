import React from 'react'

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