import React from "react";
import TextField from '@material-ui/core/TextField';
import "./ProjectForm.css";
import Button from '@material-ui/core/Button';

class ProjectForm extends React.Component {
    render() {
        return (
            <form className="ProjectForm" noValidate autoComplete="off">
                <TextField
                    className="ProjectForm__field"
                    id="outlined-name"
                    label="Название"
                    value=""
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    className="ProjectForm__field"
                    id="outlined-name"
                    label="Описание"
                    value=""
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    className="ProjectForm__field"
                    id="outlined-name"
                    label="Итерация"
                    value=""
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    className="ProjectForm__field"
                    id="outlined-name"
                    label="Веха"
                    value=""
                    margin="normal"
                    variant="outlined"
                />
                <Button className="ProjectForm__save-btn" variant="contained">
                    Сохранить
                </Button>
            </form>
        )
    }
}

export default ProjectForm;