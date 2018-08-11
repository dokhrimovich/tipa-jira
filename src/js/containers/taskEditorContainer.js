import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskEditor from 'js/components/task/taskEditor';

const mapStateToProps = (state) => ({
    user: state.user,
    users: state.users,
    statuses: state.statuses,
    currentTask: state.currentTask
});

const TaskEditorContainer = withRouter(connect(
    mapStateToProps
)(TaskEditor));

export default TaskEditorContainer;
