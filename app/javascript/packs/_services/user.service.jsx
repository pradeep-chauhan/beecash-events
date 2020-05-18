import { apiConfig } from './api';
export const userService = {
    login,
    logout,
};

function login(url,email, password) {
    const user = {
        email,
        password
    };

    return apiConfig.post(url, { user })
        .then(data => {
            if (data.status === 200) {
                localStorage.setItem('user', JSON.stringify(data.data.user));
            }
            return data;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}