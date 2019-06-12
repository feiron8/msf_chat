import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ViewHeadline from "@material-ui/icons/ViewHeadline"
import ContactsList from "../ContactsList";

class AppSide extends React.Component {
    state = {
        left: false,
    };

    render() {
        return (
            <React.Fragment>
                <div className="App__side">
                    <div className="App__side-title">
                        <IconButton onClick={this.toggleDrawer('left', true)}>
                            <ViewHeadline/>
                        </IconButton>
                        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                            {this.sideList('left')}
                        </Drawer>
                        <Typography className="App__side-title-text" component="h1" variant="h5">
                            Список контактов
                        </Typography>
                    </div>
                    <ContactsList/>
                </div>
            </React.Fragment>
        )
    }

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
                {['Профиль', 'Список контактов'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Выход'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default AppSide