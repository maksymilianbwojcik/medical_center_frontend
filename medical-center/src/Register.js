import React, {Component} from 'react';

class Register extends Component{
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
            password_confirmation: this.state.password_confirmation
        }

        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.password_confirmation);

        fetch("http://localhost:8080/register", {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "POST"
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
                <form id="form-login" onSubmit={this.handleSubmit}>
                    <label><b>Email</b></label>
                    <input type="email" name="email" placeholder="Wprowadź email" value={this.state.email} onChange={this.handleChange} required></input>

                    <label><b>Hasło</b></label>
                    <input type="password" name="password" placeholder="Wprowadź hasło" value={this.state.password} onChange={this.handleChange} required></input>

                    <label><b>Potwierdzenie hasła</b></label>
                    <input type="password" name="password_confirmation" placeholder="Potwierdź hasło" value={this.state.password_confirmation} onChange={this.handleChange} required></input>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Register;
