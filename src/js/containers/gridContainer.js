import React from 'react';
import Grid from "../components/grid/grid";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    columns: state.statuses
});

const GridContainer = connect(
    mapStateToProps
)(Grid);

export default GridContainer;
