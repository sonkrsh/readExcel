import React, { useEffect } from "react";
import HomepageDropdownSearch from "../../Components/homepageDropdownSearch";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    makeData,
    locationData,
    fuelData,
} from "../../../Admin/Containers/Make-Model-Fuel/action";
import { getImages } from "../../../Admin/Containers/AddImages/actions";
import { getModel } from "./action";
import "./style.css";
import FaqCollapse from "../../Components/faqCollapse";

function index(props) {
    const dispatch = useDispatch();
    const reducerProps = useSelector((state) => state?.MakeModelFuelreducer);
    const homePageimg = useSelector((state) => state?.AddImages?.homePageData);
    const originReducer = useSelector((state) => state?.Homepage);

    useEffect(() => {
        dispatch(makeData());
        dispatch(locationData());
        dispatch(fuelData());
        dispatch(getImages());
    }, []);

    const onSignInSubmit = (data) => {
        console.log("====================================");

        const phoneNumber = "+919818351953";
        const appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;

                getCode();
            })
            .catch((error) => {
                window.recaptchaVerifier.render().then(function (widgetId) {
                    grecaptcha.reset(widgetId);
                });
                console.log("====================================ddd", error);
            });
    };
    const getCode = () => {
        const code = prompt("enter Number");
        confirmationResult
            .confirm(code)
            .then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(
                    "====================================",
                    user.phoneNumber
                );

                // ...
            })
            .catch((error) => {
                window.recaptchaVerifier.clear();
                window.recaptchaVerifier.render().then(function (widgetId) {
                    grecaptcha.reset(widgetId);
                });
            });
    };
    return (
        <>
            <Row
                id="homepageSearchBox"
                style={{
                    backgroundImage: `url(${
                        localStorage.getItem("homePage")
                            ? localStorage.getItem("homePage")
                            : homePageimg?.url
                    })`,
                    backgroundSize: "cover",
                }}
            >
                <div id="recapture"></div>
                {/*                 <button onClick={() => onSignInSubmit()}>Click Me </button> */}
                <Col id="SearchCar" xs={24} sm={24} md={24} lg={8} xl={8}>
                    <HomepageDropdownSearch
                        locationArray={reducerProps?.locationData}
                        makeArray={reducerProps?.makeData}
                        modelArray={originReducer?.modelData}
                        fuelArray={reducerProps?.fuelData}
                        makeId={(id) => {
                            dispatch(getModel(id));
                        }}
                        onSubmit={(data) => {
                            props?.history?.push(
                                `/${data?.makeName}/${data?.modelName}/${data?.fuelName}/${data?.locationName}`
                            );
                        }}
                    />
                </Col>
                <Col id="homePageLeftImg" xs={0} sm={0} md={0} lg={15} xl={15}>
                    {/*   <h3>Write here WhatEver You Want TO Write</h3> */}
                </Col>
            </Row>
            <FaqCollapse />
        </>
    );
}

export default index;
