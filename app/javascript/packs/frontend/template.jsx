import React from 'react';
import { withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from '../_component/copyright'

import { connect } from 'react-redux';
import { userActions } from '../_actions';

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



class HomeTemplate extends React.Component {

    goToLogin = (type) => {
        this.props.history.push({
            pathname: '/app/login',
            search: `?type=${type}`,
        })
    }

    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            Demo
                        </Typography>

                        <Button onClick={() => this.goToLogin('customer')} color="primary" variant="outlined" className={classes.link}>
                            Customer Sign In
                        </Button>
                        <Button onClick={() => this.goToLogin('admin')} color="primary" variant="outlined" className={classes.link}>
                            Admin Sign In
                        </Button>
                    </Toolbar>
                </AppBar>
                {/* Hero unit */}
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {this.props.title}
                    </Typography>

                </Container>


                {/* End hero unit */}
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {this.props.children}
                    </Grid>
                </Container>


                {/* Footer */}
                <Container maxWidth="md" component="footer" className={classes.footer}>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
                {/* End footer */}
            </React.Fragment>
        );
    }
}

function mapState(state) {
    const { loggedIn } = state.authentication;
    return { loggedIn };
}

const actionCreators = {
    login: userActions.login,
};

export default withRouter(withStyles(styles)(connect(mapState, actionCreators)(HomeTemplate)));
