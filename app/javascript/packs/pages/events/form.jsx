import React from 'react';
import MuiForm from '../../_component/form'
import FormLayout from '../../theme/formLayout'

import { connect } from 'react-redux';
import { crudActions, alertActions } from '../../_actions';

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            title: 'Create event',
            submitText: 'Create',
            action: 'create',
            id: null,
            form: {
                title: '',
                description: '',
                address: '',
                city: '',
                state: '',
                organizor: '',
                start_date: new Date(),
                end_date: new Date(),
                seat_capacity: '',
            }
        }
    }

    createForm = () => {
        const { form } = this.state
        let formFields = []

        formFields.push({
            name: 'title',
            label: 'title',
            type: 'text',
            icon: '',
            value: form.title,
            validation: 'required',
        })
        formFields.push({
            name: 'description',
            label: 'description',
            type: 'text',
            icon: '',
            value: form.description,
            validation: 'required',
        })
        formFields.push({
            name: 'address',
            label: 'address',
            type: 'text',
            icon: '',
            value: form.address,
            validation: 'required',
        })
        formFields.push({
            name: 'city',
            label: 'city',
            type: 'text',
            icon: '',
            value: form.city,
            validation: 'required',
        })
        formFields.push({
            name: 'state',
            label: 'state',
            type: 'text',
            icon: '',
            value: form.state,
            validation: 'required',
        })
        formFields.push({
            name: 'organizor',
            label: 'organizor',
            type: 'text',
            icon: '',
            value: form.organizor,
            validation: 'required',
        })
        formFields.push({
            name: 'start_date',
            label: 'start date',
            type: 'date',
            icon: '',
            variant: 'inline',
            format: 'DD-MM-YYYY',
            value: form.start_date,
            validation: 'required',
        })
        formFields.push({
            name: 'end_date',
            label: 'end date',
            type: 'date',
            icon: '',
            variant: 'inline',
            format: 'DD-MM-YYYY',
            value: form.end_date,
            validation: 'required',
        })
        formFields.push({
            name: 'seat_capacity',
            label: 'seat capacity',
            type: 'text',
            icon: '',
            value: form.seat_capacity,
            validation: 'required',
        })


        return formFields
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id && id !== 'new') {
            this.props.getData('form', 'admin/events', id)
        }
    }

    static getDerivedStateFromProps(props) {
        let newState = {};

        if (props.match.params.id !== 'new' && props.form !== null) {
            newState.id = props.match.params.id
            newState.title = 'Edit event'
            newState.submitText = 'Edit'
            newState.action = 'update'
            newState.form = props.form
        }

        if (props.formSubmit) {
            props.history.push('/app/events')
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
                this.props.updateData('form', 'admin/events', id, { event: form })
            } else {
                this.props.createData('form', 'admin/events', { event: form })
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
