import React from 'react';
import TaskItemContainer from '../../containers/taskItemContainer';

class GridColumn extends React.Component {
    render() {
        let { config, tasks } = this.props;

        return (
            <div className="grid-column">
                <div className="grid-column_header"><header>{config.title}</header></div>
                <div className="grid-column_content">
                    {tasks.map((task) => {
                        return (<TaskItemContainer key={task.id} task={task}></TaskItemContainer>);
                    })}
                </div>
            </div>
        );
    }
}

export default GridColumn;
