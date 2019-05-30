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
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

class App extends React.Component {
  state = {
    left: false,
    tabs: 0
  };

  render() {
    return (
      <div className="App">
        <Container maxWidth="lg" class="App__container">
          <Grid container component="main" className="App__main">
            <CssBaseline />
            <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
              <div className="App__side">
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
            <Grid item xs={false} sm={4} md={9} className="App__project">
              <AppBar position="static" color="default">
                <Tabs
                  value={this.state.tabs}
                  onChange={this.handleChangeTabs}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="Чат" />
                  <Tab label="Документы" />
                  <Tab label="Управление проектом" />
                </Tabs>
              </AppBar>
              <TabContainer>
                <Chat/>
              </TabContainer>
              <TabContainer>
                <ul>
                  <li>Документ 1</li>
                  <li>Документ 2</li>
                  <li>Документ 3</li>
                </ul>
              </TabContainer>
              <TabContainer>
                Управление проектом
              </TabContainer>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  };

  handleChangeTabs = (event, newValue) => {
    this.setState((state) => ({tabs: newValue}))
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
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;