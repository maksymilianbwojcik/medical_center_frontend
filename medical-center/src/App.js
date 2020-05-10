import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Faq from './Faq';

class App extends Component{
    render(){
        return(
            <div id="page-wraper">
                <div id="logo" className="container">
                    <h1><span className="icon icon-ambulance icon-size"></span><a href="#">Medi<span>Shield</span></a></h1>
                </div>
                <div id="wrapper" className="container">
                    <Router>
                        <Menu />
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Faq path="/faq" component={Faq}></Faq>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
