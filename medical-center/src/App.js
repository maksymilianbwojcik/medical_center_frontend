import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Faq from './Faq';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <Router>
                <div id="page-wraper">
                    <div id="logo" className="container">
                        <h1><span className="icon icon-ambulance icon-size"></span><Link to="/home">Medi<span>Shield</span></Link></h1>
                    </div>
                    <div id="wrapper" className="container">
                        <Menu />
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Faq path="/faq" component={Faq}></Faq>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </Router>
        );
    }
}

export default App;
