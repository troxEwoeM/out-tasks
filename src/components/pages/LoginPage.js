import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from "../forms/LoginForm";
import api from "../../api";

class HomePage extends Component {

    submit = (data) => api.user.login(data);

    render() {
        return (
            <div>
                <h1>Login Page</h1>

                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

HomePage.propTypes = {};

export default HomePage;