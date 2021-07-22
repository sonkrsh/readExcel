import React, { useState, useEffect, useRef } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
    const [status, setstatus] = useState("data");

    useEffect(() => {
        axios
            .get("api/auth/admin/checkToken")
            .then((resp) => {
                const {
                    data: { message },
                } = resp;
                setstatus(message);
                //setstatus(true);
            })
            .catch((err) => {
                setstatus("fail");
            });
    }, [status]);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (status == "success") {
                    return (
                        <Redirect
                            to={{
                                pathname: "/Dashboard",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                } else if (status == "fail") {
                    return <Component {...rest} {...props} />
                }
            }}
        />
    );
};

export default PrivateRoute;
