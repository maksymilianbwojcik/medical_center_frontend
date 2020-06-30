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
import Login from "./Login";
import Signup from './Signup';
import CustomMenu from "./Menu";
import Home from "./Home";
import Faq from "./Faq";
import Footer from "./Footer";
import UserTimetable from "./UserTimetable";
import DoctorList from "./DoctorList";

import { Layout, notification } from 'antd';
import DoctorInfo from './DoctorInfo';
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
    handleLogout(notificationType="success", description="You're successfully logged out.") {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        notification[notificationType]({
            message: 'Medishield',
            description: description,
        });
       // this.props.history.push('/signup');
    }

    handleLogin() {
        notification.success({
            message: 'Medishied',
            description: "Udało Ci się zalogować.",
        });
        this.loadCurrentUser();
        this.history.push("/");
    }

    render() {
        if(this.state.isLoading) {
            return <LoadingIndicator />
        }
        return (
            <Layout>
                <div id="logo" className="container">
                    <h1><span className="icon icon-ambulance icon-size"/><Link to="/">Medi<span>Shield</span></Link></h1>
                </div>

                <Content>
                    <div id="wrapper" className="container">

                        <CustomMenu isAuthenticated={this.state.isAuthenticated}
                              currentUser={this.state.currentUser}
                              onLogout={this.handleLogout} />

                        <Switch>
                            <Route path="/login" render={(props) => <Login onLogin={this.handleLogin} {...props} />}/>
                            <Route path="/signup" component={Signup}/>
                            <Route path="/" exact component={Home}/>
                            <Route path="/faq" component={Faq}/>
                            <Route path="/usertimetable" component={UserTimetable}/>
                            <Route path="/doctors" component={DoctorList}/>
                            
                            <Route path="/users/:username"
                                   render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                            </Route>
                            <Route path="/doctor/:doctorId" component={DoctorInfo}/>

                            <Route component={NotFound}/>
                        </Switch>

                    </div>
                </Content>
                <Footer/>
            </Layout>

        );
    }
}

export default App;
