import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import action from 'js/actions/common';
import Footer from 'js/components/footer';
import Content from 'js/components/content';
import Header from 'js/components/header/header';
import TaskEditor from 'js/components/task/taskEditor';

class App extends React.Component {
    componentWillMount() {
        const { initApp } = this.props;

        initApp();
    }

    render() {
        return (
            <div className="application">
                <Header/>
                <Route exact path="/" component={Content} />
                <Route path="/task/:id" component={TaskEditor} />
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    initApp: () => action.initApp(dispatch)
});

export default withRouter(connect(
    null, mapDispatchToProps
)(App));
