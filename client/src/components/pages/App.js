import React from 'react';
import './App.css';
import AppContent from '../layout/AppContent'
import AppSide from '../layout/AppSide'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from "@material-ui/core/CssBaseline";
import 'react-chat-elements/dist/main.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <Grid container component="main" className="App__main">
            <CssBaseline />
            <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
              <AppSide/>
            </Grid>
            <Grid item xs={false} sm={4} md={9} className="App__project">
              <AppContent/>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  };
}

export default App;