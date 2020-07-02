import React, {Component} from 'react';
import {
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import "./common/AppHeader.css";

const Header = Layout.Header;

class CustomMenu extends Component{
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick({ key }) {
        if(key === "logout") {
            this.props.onLogout();
        }
    }

    render(){
        let menuItems;
        if(this.props.currentUser) {
            menuItems = [
                <Menu.Item key="/profile" className="profile-menu">
                    <ProfileDropdownMenu
                        currentUser={this.props.currentUser}
                        handleMenuClick={this.handleMenuClick}/>
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
                    <li><Link to="/doctors">Nasi lekarze</Link></li>
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

function ProfileDropdownMenu(props) {
    const dropdownMenu = (
        <Menu onClick={props.handleMenuClick} mode="horizontal">
            <Menu.Item key="profile" className="dropdown-item">
                <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
            </Menu.Item>

            <Menu.Item key="usertimetable" className="dropdown-item">
                <Link to={`/usertimetable`}>Timetable</Link>
            </Menu.Item>

            <Menu.Item key="logout" className="dropdown-item">
                <Link to={`/`}>Logout</Link>
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

export default CustomMenu;
