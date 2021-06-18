import decode from 'jwt-decode';

class AuthService {
    // retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    }

    // check if user is still logged in
    loggedIn() {
        // checks if there is a saved token that's still valid
        const token = this.getToken();
        // use type coersion (conversion?) to check if token is NOT undefined and not expired
        return !!token && !this.isTokenExpired(token);
    }

    // check if token has expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
    // retrieve token from localStorage
    getToken() {
        // retrieves user token from localStorage
        return localStorage.getItem('id_token');
    }
    // set token to localStorage and reload page to homepage
    login(idToken) {
        // saves user token to localStorage
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }
    // clear token from localStorage and force logout with reload
    logout() {
        // clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // this will reload page and reset state of app
        window.location.assign('/');
    }
}

export default new AuthService();
