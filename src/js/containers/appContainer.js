import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from 'js/components/app';
import action from 'js/actions/common';

const mapDispatchToProps = (dispatch) => ({
    initApp: () => action.initApp(dispatch)
});

const AppContainer = withRouter(connect(null, mapDispatchToProps)(App));

export default AppContainer;
