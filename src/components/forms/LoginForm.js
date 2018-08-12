import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from "semantic-ui-react";
import validator from "validator";
import InlineError from "../messages/InlineError";

class LoginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
            this.setState({
                ...this.state,
                data: {...this.state.data, [e.target.name]: e.target.value}
            });

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props.submit(this.state.data)
               .catch(err => this.setState({errors: err.response.data.message, loading: false}));
        }
    };

    validate = data => {
        const errors = {};

        if (!validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";

        return errors;
    };

    render() {
        const {data, loading, errors} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='sample@site.ru'
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="66350531"
                        value={data.password}
                        onChange={this.onChange}
                     />
                     {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;