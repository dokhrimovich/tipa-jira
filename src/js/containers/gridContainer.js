import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Grid from 'js/components/grid/grid';

const mapStateToProps = (state) => ({
    columns: state.statuses
});

const GridContainer = withRouter(connect(
    mapStateToProps
)(Grid));

export default GridContainer;
