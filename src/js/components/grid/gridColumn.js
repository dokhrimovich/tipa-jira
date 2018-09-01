import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskItem from 'js/components/task/taskItem';

class GridColumn extends React.Component {
    render() {
        let { config, tasks } = this.props;

        return (
            <div className="grid-column columns">
                <div className="grid-column_header"><header>{config.title}</header></div>
                <div className="grid-column_content columns">
                    {tasks.map((task) => {
                        return (<TaskItem key={task.id} task={task}></TaskItem>);
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    tasks: state.tasks.filter((task) => task.status === ownProps.config.id)
});

export default withRouter(connect(
    mapStateToProps
)(GridColumn));
