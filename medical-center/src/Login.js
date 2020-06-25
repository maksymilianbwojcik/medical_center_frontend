import React, { Component } from 'react';
import { login } from './utils/APIUtils';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from './constants';

import { Form, Input, Button, Icon, notification } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    render() {
        const AntWrappedLoginForm = Form.create()(LoginForm)
        return (
            <div>
                <h1 className="page-title">Login</h1>

                <div>
                    <AntWrappedLoginForm onLogin={this.props.onLogin} />
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                login(loginRequest)
                    .then(response => {
                        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                        this.props.onLogin();
                    }).catch(error => {
                    if(error.status === 401) {
                        notification.error({
                            message: 'MediShield',
                            description: 'Zła nazwa użytkownika lub hasło!'
                        });
                    } else {
                        notification.error({
                            message: 'MediShield',
                            description: error.message || 'Coś poszło nie tak...'
                        });
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} id="form-login">
                <FormItem>
                    {getFieldDecorator('usernameOrEmail', {
                        rules: [{ required: true, message: 'Please input your username or email!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" />}
                            size="large"
                            name="usernameOrEmail"
                            placeholder="Username or Email" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" />}
                            size="large"
                            name="password"
                            type="password"
                            placeholder="Password"  />
                    )}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit" size="large">Zaloguj się</Button>
                    Lub <Link to="/signup">zarejestruj się już teraz!</Link>
                </FormItem>
            </Form>
        );
    }
}


export default Login;