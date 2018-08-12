import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from "../forms/LoginForm";

class HomePage extends Component {

    submit = (data) => {
        return console.log(data);
    };

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