import React from 'react';
import App from "../components/app";
import { connect } from "react-redux";
import { initApp } from '../actions/common';

const mapDispatchToProps = (dispatch) => ({
    initApp: () => initApp(dispatch)
});

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;
