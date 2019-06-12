import React from "react";
import Chat from "../Chat";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./AppContent.css"
import ProjectForm from "../ProjectForm"
import Documents from "../Documents"

class AppContent extends React.Component {
    state = {
        tabs: 0
    };

    render() {
        return (
            <React.Fragment>
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
                {this.state.tabs === 0 && (
                    <Typography component="div" className="App__tabs">
                        <Chat/>
                    </Typography>
                )}
                {this.state.tabs === 1 && (
                    <Typography component="div" className="App__tabs">
                        <Documents/>
                    </Typography>
                )}
                {this.state.tabs === 2 && (
                    <ProjectForm/>
                )}
            </React.Fragment>
        )
    }

    handleChangeTabs = (event, newTab) => {
        this.setState((state) => ({tabs: newTab}))
    };
}

export default AppContent