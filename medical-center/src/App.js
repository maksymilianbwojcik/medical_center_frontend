import React, { Component } from 'react';
import {
    Route,
    withRouter,
    Switch,
    Link
} from 'react-router-dom';

import { getCurrentUser } from './utils/APIUtils';
import { ACCESS_TOKEN } from './constants';

import NotFound from "./common/NotFound";
import LoadingIndicator from "./common/LoadingIndicator";
import Profile from "./Profile";
import AppHeader from "./common/AppHeader";
import Login from "./Login";
import Signup from './Signup';
import Menu from "./Menu";
import Home from "./Home";
import Faq from "./Faq";
import Footer from "./Footer";

import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        notification.config({
            placement: 'topRight',
            top: 70,
            duration: 3,
        });
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.loadCurrentUser();
    }

    // Handle Logout, Set currentUser and isAuthenticated state which will be passed to other components
    handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);

        notification[notificationType]({
            message: 'Polling App',
            description: description,
        });
    }

    /*
     This method is called by the Login component after successful login
     so that we can load the logged-in user details and set the currentUser &
     isAuthenticated state, which other components will use to render their JSX
    */
    handleLogin() {
        notification.success({
            message: 'Polling App',
            description: "You're successfully logged in.",
        });
        this.loadCurrentUser();
        this.props.history.push("/");
    }

    render() {
        if(this.state.isLoading) {
            return <LoadingIndicator />
        }
        return (
            <Layout className="page-wraper">
                <div id="logo" className="container">
                    <h1><span className="icon icon-ambulance icon-size"/><Link to="/">Medi<span>Shield</span></Link></h1>
                </div>
                <AppHeader isAuthenticated={this.state.isAuthenticated}
                           currentUser={this.state.currentUser}
                           onLogout={this.handleLogout} />

                <Content className="app-content">
                    <div id="wrapper" className="container">
                        <Menu />
                        <Switch>
                            <Route path="/login" render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                            <Route path="/signup" component={Signup}></Route>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/faq" component={Faq}></Route>
                            <Route path="/users/:username"
                                   render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                            </Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </div>
                </Content>
                <Footer/>
            </Layout>

        );
    }
}

export default App;
