import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {
                email: '',
                password: '',
                loginErrors: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        this.data = {
            username: this.state.email,
            password: this.state.password,
        }

        console.log(this.state.email);
        const header = new Headers();
        header.append('Access-Control-Allow-Origin', 'no-cors');


        fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.data.user),
            header
        }).then(resp => {
            if (resp.data.logged_in) //dadaj do tablicy user to pole 
            this.props.handleSuccessfulAuth(resp.data);
        })
        .catch(err =>{
            console.log("login error", err)
        });
        event.preventDefault();
    }

    render(){
        return (
            <div id="form-login">
                <form onSubmit={this.handleSubmit}>
                    <label><b>Email</b></label>
                    <input type="text" name="email" placeholder="Wprowadź email" value={this.state.email} onChange={this.handleChange} required/>

                    <label><b>Hasło</b></label>
                    <input type="password" name="password" placeholder="Wprowadź hasło" value={this.state.password} onChange={this.handleChange} required/>
                    <button type="submit">Login</button>
                    <p>Jesteś nowym użytkownikiem? <Link to="/register">Zarejestruj się już teraz!</Link></p>
                </form>
            </div>
        );
    }
}

export default Login;
