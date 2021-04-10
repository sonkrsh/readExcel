import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./User/Containers/Homepage";
import Products from './User/Containers/Products'
import AdminRoute from "./Admin/AdminRoute";
import { Provider } from "react-redux";
import store from "./Store/store";
import './style.css'


function Index(props) {
    return (
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/:makeName/:modelName/:fuelName/:locationName?" component={Products} />
                    <Route component={AdminRoute} />
                </Switch>
            </Provider>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(
        <Router>
            <Index />
        </Router>,
        document.getElementById("root")
    );
}
