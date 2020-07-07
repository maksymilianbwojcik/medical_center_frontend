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
import News from "./News";
import AdminPanel from "./AdminPanel";
import {Layout, notification} from 'antd';
import DoctorInfo from './DoctorInfo';
import { Redirect, useHistory } from "react-router-dom";
import Contact from "./Contact";
import Result from "./Results";

const { Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false,
            doctor: false,
            client: false,
            admin: false,
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
                    isLoading: false,
                    doctor: response.doctor,
                    client: response.client,
                    admin: response.admin
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
        this.props.history.push('/signup');
    }

    handleLogin() {
        notification.success({
            message: 'Medishied',
            description: "Udało Ci się zalogować.",
        });
        this.loadCurrentUser();
        this.props.history.push('/');
    }
/*
                <div id="page-wraper">
                    <div id="logo" className="container">
                        <h1><span className="icon icon-ambulance icon-size"></span><Link to="/">Medi<span>Scrubs</span></Link></h1>
                    </div>
*/

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
                                    client={this.state.client}
                                    doctor={this.state.doctor}
                                    onLogout={this.handleLogout} />

                        <Switch>
                            <Route path="/login" render={(props) => <Login onLogin={this.handleLogin} {...props} />}/>
                            <Route path="/signup" component={Signup}/>
                            <Route path="/" exact component={Home}/>
                            <Route path="/faq" component={Faq}/>
                            <Route path="/usertimetable" component={UserTimetable} doctor={this.state.doctor}/>
                            <Route path="/doctors" component={DoctorList}/>
                            <Route path="/news" component={News}/>
                            <Route path="/results" component={Result}/>

                            { this.state.admin == true && (
                                <Route path="/admin" component={AdminPanel}/>
                            )}
                            <Route path="/contact" component={Contact}/>
                            <Route path="/users/:username"
                                   render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                            </Route>
                            
                            { this.state.doctor != true && (
                            <Route path="/doctor/:doctorId" render={(props) => <DoctorInfo currentUser={this.state.currentUser} client={this.state.client} doctor={this.state.doctor} {...props}  />}/>
                            )}

                            <Route component={NotFound}/>
                        </Switch>

                    </div>
                </Content>
                <Footer/>
            </Layout>

        );
    }
}

export default withRouter(App);
