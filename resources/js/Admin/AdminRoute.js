import React,{lazy,Suspense} from "react";
import AdminLoginPage from "./Containers/AdminLoginPage";
import AdminLayout from "./Containers/AdminLayout";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
const PrivateRoute = lazy(()=>import("./utils/PrivateRoute"))
const ProtectedRoute = lazy(()=>import("./utils/ProtectedRoute"))

function AdminRoute(props) {
    console.log(props);
    return (
        <div>
            <Provider store={store}>
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
            </Provider>
        </div>
    );
}

export default AdminRoute;
