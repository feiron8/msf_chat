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

class SignUp extends React.Component {
    state = {
        name: "",
        lastName: "",
        email: "",
        pass: ""
    };

    render = () => {
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
        this.props.registerAction({
            name: this.state.name,
            lastName: this.state.lastName,
            email: this.state.email,
            pass: this.state.pass
        });
    }
}

export default connect(
    null,
    {
        registerAction: registerAction
    }
)(SignUp);