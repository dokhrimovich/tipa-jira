import React from 'react';
import Avatar from "./common/avatar";

class TaskItem extends React.Component {
    getUserByUserId(userId) {
        let { users } = this.props;

        return users.find((u) => u.id === userId) || {};
    }

    render() {
        let { task, currentTask, onTaskClick } = this.props;

        return (<div
                className={`grid-column_item${(currentTask.id === task.id) ? ' active' : ''}`}
                onClick={() => onTaskClick(task.id)}
            >
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
