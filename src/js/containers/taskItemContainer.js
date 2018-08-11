import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import action from 'js/actions/common';
import TaskItem from 'js/components/task/taskItem';

const mapStateToProps = (state) => ({
    users: state.users,
    currentTask: state.currentTask
});

const mapDispatchToProps = (dispatch) => ({
    onTaskClick: (id) => action.setActiveTask(dispatch, id)
});

const TaskItemContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskItem));

export default TaskItemContainer;
