import React from 'react';
import HeaderContainer from '../containers/headerContainer';
import Content from './content';
import Footer from './footer';

class App extends React.Component {
    componentWillMount() {
        const { initApp } = this.props;

        initApp();
    }

    render() {
        return (
            <div className="application">
                <HeaderContainer/>
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;
