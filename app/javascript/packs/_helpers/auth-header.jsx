export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.auth_token) {
        return { 'Authorization': user.auth_token };
    } else {
        return {};
    }
}