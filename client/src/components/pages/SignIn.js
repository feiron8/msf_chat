import React from 'react';
import './SignIn.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {connect} from "react-redux";
import {authAction} from "../../ac";
import {Redirect} from "react-router-dom"

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

class SignIn extends React.Component {
    state = {
        email: "",
        pass: "",
        toMain: false
    };

    render() {
        if (this.state.toMain === true) {
            return <Redirect to='/' />
        }

        return (
            <Grid container component="main" className="signin">
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className="signin__image">
                    <img src="/images/msf.png" alt="MSF" className="signin__msf"/>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className="signin__side">
                    <div className="signin__side-container">
                        <Typography component="h1" variant="h3" className="signin__header">
                            MSF-чат
                        </Typography>
                        <Typography component="h1" variant="h5" className="signin__header">
                            Авторизация
                        </Typography>
                        <form className="signin__form" noValidate className="signin__form">
                            <FormControl className="signin__control">
                                <InputLabel shrink htmlFor="bootstrap-control" className="signin__input-label">
                                    Логин
                                </InputLabel>
                                <BootstrapInput id="bootstrap-input" className="signin__input" onChange={this.changeEmail}/>
                            </FormControl>
                            <FormControl className="signin__control">
                                <InputLabel shrink htmlFor="bootstrap-input" className="signin__input-label">
                                    Пароль
                                </InputLabel>
                                <BootstrapInput id="bootstrap-input" className="signin__input" onChange={this.changePass}/>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="signin__submit"
                                onClick={this.signInBtn}
                            >
                                Войти
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Зарегистрироваться"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }

    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    changePass = (event) => {
        this.setState({
            pass: event.target.value
        });
    };

    signInBtn = (event) => {
        event.preventDefault();
        this.props.authAction({
            Email: this.state.email,
            Pass: this.state.pass
        });
        this.setState({
            email: "",
            pass: "",
            toMain: true
        })
    }
}

export default connect(
    null,
    {
        authAction: authAction
    }
)(SignIn);