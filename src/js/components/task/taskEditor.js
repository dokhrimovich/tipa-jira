import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class TaskEditor extends React.Component {
    render() {
        let { user } = this.props;

        return (<div className="task-editor">
            {user.isLoggedIn? this.renderEditor() : this.renderEmpty()}
        </div>);
    }

    renderEditor() {
        return (<form className="task-form">Edit</form>);
    }

    renderEmpty() {
        return (<div className="not-logged-in">Please login in order to see/modify task</div>);
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    users: state.users,
    statuses: state.statuses,
    currentTask: state.currentTask
});

export default withRouter(connect(
    mapStateToProps
)(TaskEditor));
