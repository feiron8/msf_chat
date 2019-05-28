import React from 'react'
import Typography from '@material-ui/core/Typography';

class Contact extends React.Component {
  render() {
    const {title} = this.props.contact;

    return (
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
    );
  }
}

export default Contact