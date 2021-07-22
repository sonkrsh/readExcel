import React, { lazy, Suspense } from "react";
import Homepage from "./Containers/Homepage";
import Products from "./Containers/Products";
import CheckOut from "./Containers/CheckOut";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/navBar";
const PrivateRoute = lazy(() => import("./utils/PrivateRoute"));
const ProtectedRoute = lazy(() => import("./utils/ProtectedRoute"));

function UserRoute(props) {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<div>Loading.....</div>}>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route
                        exact
                        path="/:makeName/:modelName/:fuelName/:locationName?"
                        component={Products}
                    />
                    <Route exact path="/checkout" component={CheckOut} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default UserRoute;
