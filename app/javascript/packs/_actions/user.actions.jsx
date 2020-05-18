import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './alert.actions';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,

};

function login(url, username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(url, username, password)
            .then(
                user => {
                    if (user.status === 200) {
                        dispatch(success(user.user));                        
                        if (url === '/admin/login') {
                            history.push('/app/dashboard');
                        } else {
                            history.push('/');
                        }
                    }
                },
                error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(data) { return { type: userConstants.LOGIN_REQUEST, data } }
    function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.push('/');
    return { type: userConstants.LOGOUT };
}