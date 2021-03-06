import React from 'react';
import {Route} from "react-router";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
    <div className={"ui container"}>
        <Route path={"/"} exact component={HomePage}/>
        <Route path={"/login"} exact component={LoginPage}/>
    </div>
);

App.propTypes = {};

export default App;