import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ChatList } from 'react-chat-elements';
import "./ProjectsList.css"
import {initProjectAction} from "../ac";

class ProjectsList extends React.Component {
  static propTypes = {
    projects: PropTypes.array
  };

  render() {
    const projects = this.props.projects.map(function(project) {
      return {
        className: "ContactsList__item",
        avatar: 'https://picsum.photos/100',
        alt: project.title,
        title: project.title,
        subtitle: project.title,
        date: new Date(),
        unread: 0
      }
    });

    return (
      <ChatList
          className='chat-list'
          dataSource={projects} />
    );
  }

  componentDidMount() {
    this.props.initProjects();
  }

}

const mapStateToProps = (storeState) => ({
  projects: storeState.projects
});

export default connect(mapStateToProps, {
  initProjects: initProjectAction
})(ProjectsList)