import React from 'react';
import GridColumn from "../components/grid/gridColumn";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    tasks: state.tasks.filter((task) => task.status === ownProps.config.id)
});

const GridColumnContainer = connect(
    mapStateToProps
)(GridColumn);

export default GridColumnContainer;
