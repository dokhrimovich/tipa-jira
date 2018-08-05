import React from 'react';
import App from "../components/app";
import { connect } from "react-redux";
import * as actionType from '../constants/actionTypes';

const mapDispatchToProps = (dispatch) => ({
    initApp: () => {
        let authPromise = new Promise((resolve) => {
            window.setTimeout(resolve, 200);
        });

        authPromise.then(() => {
            dispatch({ type: actionType.INIT });
        });

        return authPromise;
    }
});

const AppContainer = connect(
    null,
    mapDispatchToProps
)(App);

export default AppContainer;
