import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {registerAction} from "../../ac";
import "./SignUp.css"
import {Redirect} from "react-router-dom"

class SignUp extends React.Component {
    state = {
        name: "",
        lastName: "",
        email: "",
        pass: "",
        toSignIn: false
    };

    render = () => {
        if (this.state.toSignIn === true) {
            return <Redirect to='/signin' />
        }

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="SignUp">
                    <Typography component="h1" variant="h4">
                        MSF-чат
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>
                    <form className="SignUp__form" noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={this.state.name}
                                    onChange={this.changeName}
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Имя"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={this.state.lastName}
                                    onChange={this.changeLastName}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Фамилия"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={this.state.email}
                                    onChange={this.changeEmail}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={this.state.pass}
                                    onChange={this.changePass}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="SignUp__submit"
                            onClick={this.signUpBtn}
                        >
                            Зарегистрироваться
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Войти
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    };

    changeName = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    changeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    };

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

    signUpBtn = (event) => {
        event.preventDefault();
        this.props.registerAction({
            Name: this.state.name,
            Lastname: this.state.lastName,
            Email: this.state.email,
            Pass: this.state.pass
        });
        this.setState({
            name: "",
            lastname: "",
            email: "",
            pass: "",
            toSignIn: true
        })
    }
}

export default connect(
    null,
    {
        registerAction: registerAction
    }
)(SignUp);