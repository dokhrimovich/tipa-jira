import React from 'react';
import { Route } from 'react-router-dom';
import Footer from 'js/components/footer';
import Content from 'js/components/content';
import HeaderContainer from 'js/containers/headerContainer';
import TaskEditorContainer from 'js/containers/taskEditorContainer';

class App extends React.Component {
    componentWillMount() {
        const { initApp } = this.props;

        initApp();
    }

    render() {
        return (
            <div className="application">
                <HeaderContainer/>
                <Route exact path="/" component={Content} />
                <Route path="/task/:id" component={TaskEditorContainer} />
                <Footer />
            </div>
        );
    }
}

export default App;
