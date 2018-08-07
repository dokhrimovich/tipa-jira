import React from 'react';
import TaskItem from "../components/taskItem";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    users: state.users
});

const TaskItemContainer = connect(
    mapStateToProps
)(TaskItem);

export default TaskItemContainer;
