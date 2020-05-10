import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Menu extends Component{

    render(){
        return (
            <div id="menu" className="container">
                <ul>
                    <li className="current_page_item"><Link to="/">Homepage</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/clients">Our Clients</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
