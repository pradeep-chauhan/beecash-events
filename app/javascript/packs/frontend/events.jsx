import React from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { crudActions, confirmActions } from '../_actions';

import { TableAction } from '../_component/material-table/tableAction'
import MaterialDataTable from '../_component/material-table'



const styles = (theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
});

const title = 'events'

class EventLists extends React.Component {



    viewData = (data) => {        
        this.props.history.push(`/app/event-detail/${data.id}`)
    }

    render() {
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
        if (this.viewData) {
            columns.push(TableAction(null, null, this.viewData))
        }
        return (
            <React.Fragment>
                <MaterialDataTable
                    title={title}
                    url='customer/events'
                    columns={columns}
                    selection={true}
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

export default withRouter(withStyles(styles)(connect(mapStateToProps, actionCreators)(EventLists)));
