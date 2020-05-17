import React from "react";
import MaterialTable from 'material-table';
import { crudService } from '../../_services';

class MaterialDataTable extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            columns: this.props.columns,
            resultData: []
        }

        this.tableRef = React.createRef();
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate() {
        if (this.tableRef.current) {
            this.tableRef.current.onQueryChange()
        }
    }

    fetchData = () => {
        const { serverSide } = this.props
        if (!serverSide) {
            crudService._getAll(this.props.url, [])
                .then(
                    result => {                        
                        this.setState({ resultData: result.data.data })
                    }
                );
        }
    }

    render() {
        const { columns, resultData } = this.state
        console.log('resultData', resultData)
        const { selection, refresh, serverSide } = this.props
        const actions = []
        const options = {
            selection: selection,
            actionsColumnIndex: -1,
            search: true,
            sorting: true,
            filtering: true,
        }

        if (this.props.deleteAll) {
            actions.push({
                icon: 'delete',
                tooltip: 'Delete',
                onClick: (event, rowData) => {
                    this.props.deleteAll(rowData);
                }
            })
        }
        if (this.props.addData) {
            actions.push({
                icon: 'add',
                tooltip: 'Add',
                isFreeAction: true,
                onClick: () => {
                    this.props.addData();
                }
            })
        }

        if (serverSide && refresh) {
            actions.push({
                icon: 'refresh',
                tooltip: 'Refresh Data',
                isFreeAction: true,
                onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange()
            })
        }

        if (serverSide) {
            return (
                <MaterialTable
                    tableRef={this.tableRef}
                    title={this.props.title}
                    data={query =>
                        new Promise((resolve, reject) => {
                            crudService._getAll(this.props.url, query)
                                .then(
                                    result => {
                                        if (result.status === 200) {
                                            resolve({
                                                data: result.data.data,
                                                page: result.data.page - 1,
                                                totalCount: Number(result.data.data),
                                            })
                                        }
                                    }
                                );
                        })
                    }
                    options={options}
                    actions={actions}
                    columns={columns}
                />);
        } else {
            return (
                <MaterialTable                    
                    title={this.props.title}
                    data={resultData}
                    options={options}
                    actions={actions}
                    columns={columns}
                />
            );
        }

    }
}

export default MaterialDataTable;