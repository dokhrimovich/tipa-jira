import React from 'react';

class GridColumn extends React.Component {
    render() {
        let config = this.props.config;

        return (
            <div className="grid-column">
                <div className="grid-column_header"><header>{config.title}</header></div>
                <div className="grid-column_content">
                    {this.props.tasks.map((task) => {
                        return (<div className="grid-column_item">{task.title}</div>);
                    })}
                </div>
            </div>
        );
    }
}

export default GridColumn;
