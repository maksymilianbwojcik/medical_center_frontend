import React, { Component } from 'react';
import { getUserProfile } from './utils/APIUtils';
import { Avatar, Tabs } from 'antd';
import { getAvatarColor } from './utils/Colors';
import { formatDate } from './utils/Helpers';
import LoadingIndicator  from './common/LoadingIndicator';
import NotFound from './common/NotFound';
import ServerError from './common/ServerError';

//const TabPane = Tabs.TabPane;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false,
            client: props.client
        }
        this.loadUserProfile = this.loadUserProfile.bind(this);
    }

    loadUserProfile(username) {
        this.setState({
            isLoading: true
        });

        getUserProfile(username)
            .then(response => {
                this.setState({
                    user: response,
                    isLoading: false
                });
            }).catch(error => {
            if(error.status === 404) {
                this.setState({
                    notFound: true,
                    isLoading: false
                });
            } else {
                this.setState({
                    serverError: true,
                    isLoading: false
                });
            }
        });
    }

    componentDidMount() {
        const username = this.props.match.params.username;
        this.loadUserProfile(username);
    }

    componentDidUpdate(nextProps) {
        if(this.props.match.params.username !== nextProps.match.params.username) {
            this.loadUserProfile(nextProps.match.params.username);
        }
    }

    render() {
        if(this.state.isLoading) {
            return <LoadingIndicator />;
        }

        if(this.state.notFound) {
            return <NotFound />;
        }

        if(this.state.serverError) {
            return <ServerError />;
        }

        return (
            <div id="profile">
                {
                    this.state.user ? (
                    <div id="page">
                        <div id="profile-info-wrapper">
                        <div><span className="arrow-down"/></div>
                        <br/><br/><br/><br/>
                        <div id="box1">
                            <p data-letters={this.state.user.name[0].toUpperCase()}></p></div>
                            <div id="box2"><div className="user-summary">
                                <h2>{this.state.user.name}</h2>
                                <div className="username"><h1>@{this.state.user.username}</h1></div>
                                <div className="user-details">
                                <br/>
                                        <strong>Joined:</strong> {formatDate(this.state.user.joinedAt)}
                                    <div className="user-role">                           
                                        {/* <strong>Client:</strong> {this.state.user.client}<br/>
                                        <strong>Doctor:</strong> {this.state.user.doctor}       */}
                                    </div>
                                    </div>
                                </div><br/>
                                <hr className="new1"/>
                                <br/>
                                {this.state.client == true && (
                                    <h3>Aby umówić się na wizytę, przejdz do sekcji "Nasi lekarze"</h3>
                                )}
                            </div>
                            </div>
                        </div>
                    ): null
                }
            </div>
        );
    }
}

export default Profile;