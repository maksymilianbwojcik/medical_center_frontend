import React, {Component} from 'react';
import {
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon } from 'antd';
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
                    <Link to="/signup">Signup</Link>
                </Menu.Item>
            ];
        }

        return (
            <div id="menu" className="container">
                <ul>
                    <li className="current_page_item"><Link to="/">Strona główna</Link></li>
                    <li><Link to="/clients">Nasi klienci</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="/careers">Kariera</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li>
                        <Menu className="app-menu" mode="horizontal" >
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
        <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
            <Menu.Item key="user-info" className="dropdown-item" disabled>
                <div className="user-full-name-info">
                    {props.currentUser.name}
                </div>
                <div className="username-info">
                    @{props.currentUser.username}
                </div>
            </Menu.Item>
            <Menu.Divider />

            <Menu.Item key="profile" className="dropdown-item">
                <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
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
            <a className="ant-dropdown-link">
                <Icon type="user" className="nav-icon" style={{marginRight: 0}} /> <Icon type="down" />
            </a>
        </Dropdown>
    );
}

export default CustomMenu;
