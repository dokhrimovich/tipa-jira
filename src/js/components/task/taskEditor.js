import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import action from 'js/actions/common';
import Button from 'js/components/common/controls/button';
import TextInput from 'js/components/common/controls/textInput';
import SelectInput from 'js/components/common/controls/selectInput';

class TaskEditor extends React.Component {
    constructor() {
        super();

        this.isFormDataReady = false;

        this.state = {
            message: { text: '' }
        };
    }

    componentDidMount() {
        const { setActiveTask, match } = this.props;
        const urlTaskId = Number(match.params.id);

        setActiveTask(urlTaskId);
    }

    componentDidUpdate() {
        const { match, currentTask, statuses, priorities } = this.props;
        const urlTaskId = Number(match.params.id);
        const isProperTaskLoaded = currentTask && currentTask.id === urlTaskId;

        if (this.isFormDataReady) {
            return;
        }

        if (statuses.length && priorities.length && isProperTaskLoaded) {
            this.props.initialize(currentTask);
            this.isFormDataReady = true;
        }
    }

    render() {
        let { user } = this.props;

        return (<div className="task-editor normal">
            {user.isLoggedIn? this.renderEditor() : this.renderEmpty()}
        </div>);
    }

    renderEmpty() {
        return (<div className="not-logged-in normal">Please login in order to see/modify task</div>);
    }

    renderEditor() {
        const { handleSubmit, pristine, reset, submitting, statuses, priorities } = this.props;

        if (!this.isFormDataReady) {
            return 'Loading...';
        }

        return (<form
                    autoComplete="on"
                    className="header-login-form columns"
                    onSubmit={handleSubmit((data) => this.handleSubmit(data))}>
            Edit:
            <Field name="title" label="title" component={TextInput} />
            <Field name="assignedTo" label="assignedTo" component={TextInput} />

            <Field name="status" label="status" component={SelectInput} options={statuses} parse={(value) => this.parseSelect(value)}/>
            <Field name="priority" label="priority" component={SelectInput} options={priorities}/>

            <Field name="description" label="description" component={TextInput} />

            <Field name="estimate" label="estimate" component={TextInput} />

            <Button type="submit" title="Save" className="btn-save" disabled={pristine || submitting} />
        </form>);
    }

    handleSubmit(formData) {
        const taskData = Object.keys(formData).reduce((data, key) => {
            let value = formData[key];

            switch (key) {
                case 'status':
                case 'priority':
                    value = value.value;
                    break;
                default:
                    break;
            }

            data[key] = value;

            return data;
        }, {});

        return this.props.updateTask(taskData);
    }
}

const getPriorities = (priorities) => {
    return priorities.map((priority) => ({
        value: priority.id, label: priority.title
    }));
};

const getStatuses = (statuses) => {
    return statuses.map((status) => ({
        value: status.id, label: status.title
    }));
};

const prepareCurrentTask = (state) => {
    const { currentTask } = state;
    const statuses = getStatuses(state.statuses);
    const priorities = getPriorities(state.priorities);

    return Object.keys(currentTask).reduce((data, key) => {
        let value = currentTask[key];

        switch (key) {
            case 'status':
                const statusCfg = statuses.find((item) => item.value === value);

                value = {
                    value,
                    label: statusCfg && statusCfg.label
                };
                break;
            case 'priority':
                const priorityCfg = priorities.find((item) => item.value === value);

                value = {
                    value,
                    label: priorityCfg && priorityCfg.label
                };
                break;
            default:
                break;
        }

        data[key] = value;

        return data;
    }, {});
};

const mapStateToProps = (state) => ({
    user: state.user,
    users: state.users,
    statuses: getStatuses(state.statuses),
    priorities: getPriorities(state.priorities),
    currentTask: prepareCurrentTask(state)
});

const mapDispatchToProps = (dispatch) => ({
    dropActiveTask: () => action.dropActiveTask(dispatch),
    setActiveTask: (id) => action.setActiveTask(dispatch, id),
    updateTask: (data) => action.updateTask(dispatch, data)
});

const withStore = connect(
    mapStateToProps,
    mapDispatchToProps
);

const withForm = reduxForm({
    form: 'task-editor',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
    //validate: validate
});

export default compose(
    withForm,
    withStore,
    withRouter
)(TaskEditor);
