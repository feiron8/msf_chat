import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ChatList } from 'react-chat-elements';
import "./ProjectsList.css"
import {changeProjectAction, initMessagesAction, initProjectAction} from "../ac";

class ProjectsList extends React.Component {
  static propTypes = {
    projects: PropTypes.array
  };

  render() {
    const projects = this.props.projects.map((project) => {
      return {
        className: "ContactsList__item" + (this.props.currentProject.get("currentProject") === project.Id ? " ContactsList__item--active" : ""),
        avatar: 'https://picsum.photos/100',
        alt: project.Title,
        title: project.Title,
        subtitle: project.Description,
        date: new Date(),
        unread: 0,
        projectId: project.Id
      }
    });

    return (
      <ChatList
          className='chat-list'
          dataSource={projects}
          onClick={this.handleChangeProject}/>
    );
  }

  handleChangeProject = (chatItem) => {
    this.props.changeProject(chatItem.projectId);
    this.props.initMessages(chatItem.projectId);
  };

  componentDidMount() {
    this.props.initProjects(this.props.session.get("userId"));
  }

}

const mapStateToProps = (storeState) => ({
  projects: storeState.projects,
  session: storeState.session,
  currentProject: storeState.currentProject
});

export default connect(mapStateToProps, {
  initProjects: initProjectAction,
  changeProject: changeProjectAction,
  initMessages: initMessagesAction
})(ProjectsList)