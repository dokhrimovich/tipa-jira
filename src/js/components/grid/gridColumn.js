import React from 'react';

class GridColumn extends React.Component {
    render() {
        let { config, tasks } = this.props;

        return (
            <div className="grid-column">
                <div className="grid-column_header"><header>{config.title}</header></div>
                <div className="grid-column_content">
                    {tasks.map((task) => {
                        return (<div key={task.id} className="grid-column_item">{task.title}</div>);
                    })}
                </div>
            </div>
        );
    }
}

export default GridColumn;
