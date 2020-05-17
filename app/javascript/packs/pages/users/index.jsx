import React from 'react';
import { connect } from 'react-redux';
import { crudActions, confirmActions } from '../../_actions';

import { TableAction } from '../../_component/material-table/tableAction'
import MaterialDataTable from '../../_component/material-table'

const title = 'user List'
class List extends React.Component {

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

    deleteData = (id) => {
        this.props.deleteCrud('users', 'users', id);
    }

    deleteCrud = (data) => {
        this.props.showConfirm('confirm', `are you sure want to delete ${data.email} ?`, data)
    }

    deleteAll = (data) => {
        this.props.showConfirm('confirm', `are you sure want to delete ${data.length} row ?`, data)
    }

    editCrud = (data) => {
        this.props.history.push(`/app/user-form/${data.id}`)
    }

    addData = () => {
        this.props.history.push(`/app/user-form/new`)
    }

    render() {
        const columns = []
        columns.push({
            title: "name",
            field: "name"
        })
        columns.push({
            title: "email",
            field: "email"
        })
        columns.push({
            title: "gender",
            field: "gender"
        })
        columns.push({
            title: "role",
            field: "role"
        })
        if (this.deleteCrud && this.editCrud) {
            columns.push(TableAction(this.deleteCrud, this.editCrud))
        }
        return (
            <React.Fragment>
                <MaterialDataTable
                    title={title}
                    url='admin/users'
                    columns={columns}
                    selection={true}
                    addData={this.addData}
                    deleteAll={this.deleteAll}
                    refresh={true}
                    serverSide={false}
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
