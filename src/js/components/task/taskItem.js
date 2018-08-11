import React from 'react';
import Avatar from 'js/components/common/avatar';

class TaskItem extends React.Component {
    navigateToEdit(event) {
        event.preventDefault();

        let { task, history } = this.props;

        history.push(`/task/${task.id}`);
    }

    getUserByUserId(userId) {
        let { users } = this.props;

        return users.find((u) => u.id === userId) || {};
    }

    render() {
        let { task, currentTask, onTaskClick } = this.props;
        let isActive = currentTask.id === task.id;

        return (<div
            className={`task-card columns${isActive? ' active' : ''}`}
            onClick={() => onTaskClick(task.id)}
        >
            <div className="task-card-header">
                <Avatar className="small" user={this.getUserByUserId(task.assignedTo)}/>
                <div className="task-pin">
                    <div className="task-pin-btn" onClick={() => {}}/>
                </div>
                <div className="task-edit">
                    <a href="#" className="task-edit-btn" onClick={(e) => this.navigateToEdit(e)} title="edit"/>
                </div>
            </div>
            <div className="task-card-content">
                {task.title}
            </div>
        </div>);
    }
}

export default TaskItem;
