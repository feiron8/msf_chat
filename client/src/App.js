import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={8}>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;