import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import SigninOidc from './pages/signin-oidc'
import SignoutOidc from './pages/signout-oidc'
import Login from './pages/login'
import { Provider } from 'react-redux';
import store from './store';
import userManager, { loadUserFromStorage } from './services/userService'
import AuthProvider from './utils/authProvider'
import PrivateRoute from './utils/protectedRoute'

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

function App() {

    useEffect(() => {
        // fetch current user from cookies
        loadUserFromStorage(store)
    }, [])

    return (
        <Provider store={store}>
            <AuthProvider userManager={userManager} store={store}>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signout-oidc" component={SignoutOidc} />
                        <Route path="/signin-oidc" component={SigninOidc} />

                        <PrivateRoute path="/admin" component={Admin} />
                        <PrivateRoute path="/rtl" component={RTL} />
                        <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                </Router>
            </AuthProvider>
        </Provider>
    );
}

export default App;