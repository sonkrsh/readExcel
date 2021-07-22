import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AdminLoginPage from "./Admin/Containers/AdminLoginPage";
import AdminLayout from "./Admin/Containers/AdminLayout";

import UserRoute from "./User/UserRoute";

import { Provider } from "react-redux";
import store from "./Store/store";
import "./style.css";

const PrivateRoute = lazy(() => import("./Admin/utils/PrivateRoute"));
const ProtectedRoute = lazy(() => import("./Admin/utils/ProtectedRoute"));
function Index(props) {
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <div className="pageContent">
                    <Suspense fallback={<div>Loading.....</div>}>
                        <Switch>
                            <ProtectedRoute
                                exact
                                path="/admin-login"
                                component={AdminLoginPage}
                            />
                            <PrivateRoute
                                //exact
                                path="/Dashboard"
                                component={AdminLayout}
                            />

                            <Route component={UserRoute} />
                        </Switch>
                    </Suspense>
                </div>
            </div>
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
