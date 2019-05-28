import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import MessageList from './MessageList';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const messages = [
  {id: 5, text: 'hello Dimitri'},
  {id: 7, text: 'my name is Boris'},
  {id: 8, text: 'gde vashi dokozatelstva'}
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              Список контактов
            </Grid>
            <Grid item xs={8}>
              <MessageList messages={messages}/>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  };
}

export default App;