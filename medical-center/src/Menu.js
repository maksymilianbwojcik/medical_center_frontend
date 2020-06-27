import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Menu extends Component{

    render(){
        return (
            <div id="menu" className="container">
                <ul>
                    <li className="current_page_item"><Link to="/">Strona główna</Link></li>
                    <li><Link to="/news">Aktualności</Link></li>
                    <li><Link to="/clients">Nasi klienci</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="/careers">Kariera</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
