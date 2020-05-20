import React from 'react';
import { connect } from 'react-redux';
import { crudActions, confirmActions } from '../../_actions';

import { TableAction } from '../../_component/material-table/tableAction'
import MaterialDataTable from '../../_component/material-table'
import { crudService } from '../../_services';

const title = 'event List'
class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            resultData: []
        }
    }

    componentDidUpdate() {
        if (this.props.confirm.confirm) {
            if (Array.isArray(this.props.confirm.data)) {
                this.props.confirm.data.map(value => this.deleteData(value.id))
            } else {
                if (this.props.confirm.data.id) {
                    this.deleteData(this.props.confirm.data.id);
                }
            }
            this.props.clearConfirm();
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        crudService._getAll('admin/events', [])
            .then(
                result => {                        
                    this.setState({ resultData: result.data.events })
                }
            );
    }

    deleteData = (id) => {
        this.props.deleteCrud('events', 'events', id);
    }

    deleteCrud = (data) => {
        this.props.showConfirm('confirm', `are you sure want to delete ${data.email} ?`, data)
    }

    deleteAll = (data) => {
        this.props.showConfirm('confirm', `are you sure want to delete ${data.length} row ?`, data)
    }

    editCrud = (data) => {
        this.props.history.push(`/app/event-form/${data.id}`)
    }

    addData = () => {
        this.props.history.push(`/app/event-form/new`)
    }

    render() {
        const {resultData} = this.state
        const columns = []
        columns.push({
            title: "title",
            field: "title"
        })
        columns.push({
            title: "city",
            field: "city"
        })
        columns.push({
            title: "state",
            field: "state"
        })
        columns.push({
            title: "organizor",
            field: "organizor"
        })
        if (this.deleteCrud && this.editCrud) {
            columns.push(TableAction(this.deleteCrud, this.editCrud))
        }
        return (
            <React.Fragment>
                <MaterialDataTable
                    title={title}
                    columns={columns}
                    selection={true}
                    addData={this.addData}
                    deleteAll={this.deleteAll}
                    refresh={true}
                    serverSide={false}
                    data={resultData}
                />
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    const { confirm } = state;
    return { confirm };
}

const actionCreators = {
    deleteCrud: crudActions._delete,
    showConfirm: confirmActions.show,
    clearConfirm: confirmActions.clear,
}

export default connect(mapStateToProps, actionCreators)(List);
