import React from 'react';

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

export default TaskEditor;
