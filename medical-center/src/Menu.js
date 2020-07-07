import React, {Component} from 'react';
import {
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import "./common/AppHeader.css";
import {reserveAppointment} from "./utils/APIUtils";


const Header = Layout.Header;

class CustomMenu extends Component{
    constructor(props) {
        super(props);

        this.state = {
            client: props.client,
            doctor: props.doctor,
            admin: props.admin
        }
    }

    render(props){
        let menuItems;
        if(this.props.currentUser) {
            menuItems = [
                <Menu.Item key="/profile" className="profile-menu">
                    <div className="dropdown">
                        <Icon type="user" className="nav-icon" style={{marginRight: 0}} /> <Icon type="down" />
                        <div className="dropdown-content">
                            { this.state.admin != true && (
                                <Link to={`/users/${this.props.currentUser.username}`}>Profil</Link>
                            )}
                            {(this.props.currentUser.client == true || this.props.currentUser.doctor == true) &&
                            (
                                <Link to={`/usertimetable`}>Terminarz</Link>
                            )}

                            { this.props.currentUser.admin== true && (
                                    <Link to={`/admin`}>Panel Admina</Link>
                            )}

                            <button onClick={() => {this.props.onLogout()}}>
                                Logout
                            </button>
                        </div>
                    </div>
                </Menu.Item>
            ];
        } else {
            menuItems = [
                <Menu.Item key="/login">
                    <Link to="/login">Login</Link>
                </Menu.Item>,

                <Menu.Item key="/signup">
                    <Link to="/signup">Rejestracja</Link>
                </Menu.Item>
            ];
        }

        return (
            <div id="menu" className="container">
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    { ( this.state.doctor != true && this.state.admin != true )&& (
                        <li><Link to="/doctors">Nasi lekarze</Link></li>
                    )}
                    <li><Link to="/news">Aktualności</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li>
                        <Menu className="app-menu">
                            {menuItems}
                        </Menu>
                    </li>
                </ul>
            </div>
        );
    }
}


export default CustomMenu;
