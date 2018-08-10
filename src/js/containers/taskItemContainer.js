import React from 'react';
import TaskItem from "../components/taskItem";
import { connect } from "react-redux";
import action from "../actions/common";

const mapStateToProps = (state) => ({
    users: state.users,
    currentTask: state.currentTask
});

const mapDispatchToProps = (dispatch) => ({
    onTaskClick: (id) => action.setActiveTask(dispatch, id)
});

const TaskItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskItem);

export default TaskItemContainer;
