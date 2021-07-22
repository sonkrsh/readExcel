import React, { lazy, Suspense } from "react";
import AdminLoginPage from "./Containers/AdminLoginPage";
import AdminLayout from "./Containers/AdminLayout";
import { Switch, Route } from "react-router-dom";

const PrivateRoute = lazy(() => import("./utils/PrivateRoute"));
const ProtectedRoute = lazy(() => import("./utils/ProtectedRoute"));

function AdminRoute(props) {
    return (
        <div>
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
                </Switch>
            </Suspense>
        </div>
    );
}

export default AdminRoute;
