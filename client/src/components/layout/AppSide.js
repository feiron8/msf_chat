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
import "./AppSide.css"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"

class AppSide extends React.Component {
    state = {
        left: false,
        Name: "",
        Description: ""
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
                    <SimpleModal name={this.state.Name} description={this.state.Description} changeName={this.changeName} changeDescription={this.changeDescription}/>
                </div>
            </React.Fragment>
        )
    }

    changeName = (event) => {
        this.setState({Name: event.target.value});
    };

    changeDescription = (event) => {
        this.setState({Description: event.target.value});
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

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
}));

function SimpleModal(props) {
    const [open, setOpen] = React.useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
        <div>
            <Fab variant="extended" color="primary" aria-label="Delete" className="App__side-fab" onClick={handleOpen}>
                <AddIcon className="App__side-add"/>
                Добавить проект
            </Fab>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                        Добавление проекта
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        <TextField
                            value={props.name}
                            onChange={props.changeName}
                            id="filled-name"
                            label="Название"
                            margin="normal"
                            variant="filled"
                            className="App__side-input"
                        />
                        <TextField
                            value={props.description}
                            onChange={props.changeDescription}
                            id="filled-name"
                            label="Описание"
                            margin="normal"
                            variant="filled"
                            className="App__side-input"
                        />
                        <Button variant="contained" color="primary">
                            Добавить
                        </Button>
                    </Typography>
                </div>
            </Modal>
        </div>
    );
}

export default AppSide