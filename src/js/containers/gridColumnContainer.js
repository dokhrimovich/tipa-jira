import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GridColumn from 'js/components/grid/gridColumn';

const mapStateToProps = (state, ownProps) => ({
    tasks: state.tasks.filter((task) => task.status === ownProps.config.id)
});

const GridColumnContainer = withRouter(connect(
    mapStateToProps
)(GridColumn));

export default GridColumnContainer;
