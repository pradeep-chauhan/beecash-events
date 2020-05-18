import React from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { crudActions, confirmActions } from '../_actions';

import HomeTemplate from './template'
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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


class EventDetail extends React.Component {
    constructor() {
        super()
        this.state = {
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


    static getDerivedStateFromProps(props) {
        let newState = {};

        if (props.match.params.id !== 'new' && props.form !== null) {
            newState.form = props.form
        }

        if (props.formSubmit) {
            props.history.push('/')
        }

        return newState
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id && id !== 'new') {
            this.props.getData('form', 'customer/events', id)
        }
    }

    book = () => {
        const { id } = this.props.match.params
        this.props.createBooking('form', `customer/events/${id}`)
    }

    render() {
        console.log(this.state.form)
        const { title, description, city, state, address, organizor, start_date, end_date } = this.state.form
        return (
            <React.Fragment>
                <HomeTemplate title="Event Details">

                
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={description} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={city} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={state} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={address} />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={organizor} />
                        </ListItem>
                    </List>

                    <div>
                        <Button onClick={() => this.book()} color="primary" variant="outlined">
                            Book
                        </Button>
                    </div>

                </HomeTemplate>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { confirm, form, formSubmit } = state;
    return { confirm, form, formSubmit };
}

const actionCreators = {
    getData: crudActions._get,
    createBooking: crudActions._create,
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, actionCreators)(EventDetail)));
