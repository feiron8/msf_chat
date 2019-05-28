import React from 'react';
import './App.css';
import Chat from './Chat';
import ContactsList from './ContactsList'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class App extends React.Component {
  state = {
    left: false
  };

  render() {
    return (
      <div className="App">
        <Container maxWidth="lg" class="App__container">
          <Grid container component="main" className="App__main">
            <CssBaseline />
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
              <div className="signin__side-container">
                <Button onClick={this.toggleDrawer('left', true)}>Меню</Button>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                  {this.sideList('left')}
                </Drawer>
                <Typography component="h1" variant="h5">
                  Список контактов
                </Typography>
                <ContactsList/>
              </div>
            </Grid>
            <Grid item xs={false} sm={4} md={8} className="App__message-list">
              <Chat/>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  };

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState((state) => ({...state, [side]: open}));
  };

  sideList = side => (
    <div
      className="App__menu-list"
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;