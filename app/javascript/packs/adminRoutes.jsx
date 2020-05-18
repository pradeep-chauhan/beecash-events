import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from './theme/layout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dashboard from './pages/dashboard';
import UserList from './pages/users';
import UserForm from './pages/users/form';
import EventList from './pages/events';
import EventForm from './pages/events/form';

class AdminRoutes extends React.Component {
    constructor(props) {
        super(props)        
    }

    render() {
        return (
            <Layout>
                <Switch>                    
                    <Route path='/app/dashboard' exact component={Dashboard} />
                    <Route path='/app/users' exact component={UserList} />
                    <Route path='/app/user-form/:id' component={UserForm} />
                    <Route path='/app/events' component={EventList} />
                    <Route path='/app/event-form/:id' component={EventForm} />
                </Switch>
            </Layout>
        )
    }
}

function mapState(state) {
    const { loggedIn } = state.authentication;
    return { loggedIn };
}

export default withRouter(connect(mapState, null)(AdminRoutes));
