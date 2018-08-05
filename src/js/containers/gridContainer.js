import React from 'react';
import Grid from "../components/grid/grid";
import { connect } from "react-redux";
import * as actionType from '../constants/actionTypes';
import { getStatusTitle } from '../utils/statusUtils';

const mapStateToProps = (state) => ({
    columns: state.app.statuses.map((status) => ({
        code: status,
        title: getStatusTitle(status)
    }))
});

const mapDispatchToProps = (dispatch) => ({
    onChetaTam: () => {
        let authPromise = new Promise((resolve, reject) => {

        });

        authPromise.then(() => {
            dispatch({ type: actionType.LOGIN });
        });

        return authPromise;
    }
});

const GridContainer = connect(
    mapStateToProps
)(Grid);

export default GridContainer;
