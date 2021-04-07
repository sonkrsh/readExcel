import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./User";
import AdminRoute from "./Admin/AdminRoute";
import { Provider } from "react-redux";
import store from "./Store/store";

function Index(props) {
    return (
        <div>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route component={AdminRoute} />
                </Switch>
            </Provider>
        </div>
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
