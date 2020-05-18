import React from 'react';
import MuiForm from '../../_component/form'
import FormLayout from '../../theme/formLayout'

import { connect } from 'react-redux';
import { crudActions, alertActions } from '../../_actions';

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            title: 'Create user',
            submitText: 'Create',
            action: 'create',
            id: null,
            form: {
                name: '',
                email: '',
                gender: '',
                password: '',
                role: '',
            }
        }
    }

    createForm = () => {
        const { form } = this.state
        let formFields = []
        formFields.push({
            name: 'name',
            label: 'name',
            type: 'text',
            icon: '',
            value: form.name,
            validation: 'required',
        })
        formFields.push({
            name: 'email',
            label: 'email',
            type: 'text',
            icon: '',
            value: form.email,
            validation: 'required|email',
        })
        formFields.push({
            name: 'gender',
            label: 'gender',
            type: 'text',
            icon: '',
            value: form.gender,
            validation: 'required',
        })
        formFields.push({
            name: 'password',
            label: 'password',
            type: 'password',
            icon: '',
            value: form.password,
            validation: 'required',
        })
        formFields.push({
            name: 'role',
            label: 'role',
            type: 'text',
            icon: '',
            value: form.role,
            validation: 'required',
        })

        return formFields
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id && id !== 'new') {
            this.props.getData('form', 'admin/users', id)
        }
    }

    static getDerivedStateFromProps(props) {
        let newState = {};

        if (props.match.params.id !== 'new' && props.form !== null) {
            newState.id = props.match.params.id
            newState.title = 'Edit user'
            newState.submitText = 'Edit'
            newState.action = 'update'
            newState.form = props.form
        }

        if (props.formSubmit) {
            props.history.push('/app/users')
        }

        return newState
    }

    handleChange = (value, name) => {
        const { form } = this.state
        form[name] = value
        this.setState(form)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { action, id, form } = this.state
        if (form) {
            if (action === 'update') {
                this.props.updateData('form', 'admin/users', id, { user: form })
            } else {
                this.props.createData('form', 'admin/users', { user: form })
            }
        }
    }

    render() {
        const { title, submitText } = this.state
        return (
            <FormLayout title={title} fullWidth={false}>
                <MuiForm
                    formFields={this.createForm()}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    submitText={submitText}
                    submitFullWidth={true}
                    fullWidth={true}
                    noValidate={false}
                />
            </FormLayout >
        );
    }
}

function mapState(state) {
    const { form, formSubmit } = state;
    return {
        form,
        formSubmit
    };
}

const actionCreators = {
    getData: crudActions._get,
    showError: alertActions.error,
    createData: crudActions._create,
    updateData: crudActions._update,
};

export default connect(mapState, actionCreators)(Form);
