import React from 'react';
import Avatar from "./common/avatar";

class TaskItem extends React.Component {
    getUserByUserId(userId) {
        let { users } = this.props;

        return users.find((u) => u.id === userId) || {};
    }

    render() {
        let { task } = this.props;

        return (<div className="grid-column_item">
            <div className="grid-column_item-header">
                <Avatar className="small" user={this.getUserByUserId(task.assignedTo)}/>
            </div>
            <div className="grid-column_item-content">
                {task.title}
            </div>
        </div>);
    }
}

export default TaskItem;
