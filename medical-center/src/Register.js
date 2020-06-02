import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
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
            //password_confirmation: this.state.password_confirmation
        }

        fetch("http://localhost:8080/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.data)
        }).then(resp => {
            console.log("Register response",resp)
        });
        event.preventDefault();
    }

    render(){
        return (
            <div id="form-wrapper"> 
                <form id="form-login"onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required></input>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required></input>
                    <input type="password_confirmation" name="password_confirmation" placeholder="Password Confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required></input>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Login;
