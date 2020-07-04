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
<<<<<<< HEAD
=======
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.state = {
            client: props.client,
            doctor: props.doctor
        }
    }

    handleMenuClick({ key }) {
        if(key === "logout") {
            this.props.onLogout();
        }
>>>>>>> d02d334c92d94a00fd737ae043b192d2133c00df
    }

    render(props){
        let menuItems;
        if(this.props.currentUser) {
            menuItems = [
                <Menu.Item key="/profile" className="profile-menu">
                    <div className="dropdown">
                        <Icon type="user" className="nav-icon" style={{marginRight: 0}} /> <Icon type="down" />
                        <div className="dropdown-content">
                            <Link to={`/users/${this.props.currentUser.username}`}>Profile</Link>
                            <Link to={`/usertimetable`}>Timetable</Link>

                            <Link to="/" onClick={() => {this.props.onLogout()}}>
                                Logout
                            </Link>
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
                    <li className="current_page_item"><Link to="/">Strona główna</Link></li>
                    { this.state.client == true && (
                        <li><Link to="/doctors">Nasi lekarze</Link></li>
                    )}
                    <li><Link to="/news">Aktualności</Link></li>
                    <li><Link to="/about">O nas</Link></li>
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

<<<<<<< HEAD
=======
function ProfileDropdownMenu(props) {
    const dropdownMenu = (
        <Menu onClick={props.handleMenuClick} mode="horizontal">
            <Menu.Item key="profile" className="dropdown-item">
                <Link to={`/users/${props.currentUser.username}`}>Profil</Link>
            </Menu.Item>

            { (props.currentUser.client == true || props.currentUser.doctor == true) && (
            <Menu.Item key="usertimetable" className="dropdown-item">
                <Link to={`/usertimetable`}>Terminarz wizyt</Link>
            </Menu.Item>
            )}
            
            { props.currentUser.admin== true && (
            <Menu.Item key="adminpanel" className="dropdown-item">
                <Link to={`/admin`}>Panel Admina</Link>
            </Menu.Item>
            )}

            <Menu.Item key="logout" className="dropdown-item">
                <Link to={`/`}>Wyloguj</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown
            overlay={dropdownMenu}
            trigger={['click']}
            getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>

            <a onClick={e=>e.preventDefault()}>
                <Icon type="user" className="nav-icon" style={{marginRight: 0}}/> <Icon type="down" />
            </a>
        </Dropdown>
    );
}

>>>>>>> d02d334c92d94a00fd737ae043b192d2133c00df
export default CustomMenu;
