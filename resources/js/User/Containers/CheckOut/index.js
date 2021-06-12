import React, { useEffect, useState } from "react";
import CheckOutPage from "../../Components/CheckOutPage";
import Address from "../../Components/CheckOutPage/address";
import { useDispatch, useSelector } from "react-redux";
import { checkPhoneNo } from "./action";
import firebase from "../../firebase";
import { Form, Input, Modal, Button } from "antd";

const index = () => {
    const dispatch = useDispatch();
    const [isModalVisible, setisModalVisible] = useState(true);
    const [otpValue, setotpValue] = useState("");
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recapture",
            {
                size: "invisible",
                "expired-callback": () => {
                    window.recaptchaVerifier.clear();
                },
            }
        );
    }, []);

    const onSignInSubmit = (data) => {
        const phoneNumber = `+91${data.phoneNo}`;
        const appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                getCode(data);
            })
            .catch((error) => {
                window.recaptchaVerifier.render().then(function (widgetId) {
                    grecaptcha.reset(widgetId);
                });
            });
    };

    const getCode = (data) => {
        setotpValue(data);
    };

    return (
        <div>
            <div id="recapture"></div>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
            >
                {otpValue ? (
                    <Form
                        name="basic"
                        onFinish={(value) => {
                            confirmationResult
                                .confirm(value.otp)
                                .then((result) => {
                                    const user = result.user;
                                    dispatch(checkPhoneNo(otpValue));
                                    setisModalVisible(false);
                                })
                                .catch((error) => {
                                    window.recaptchaVerifier.clear();
                                    window.recaptchaVerifier
                                        .render()
                                        .then(function (widgetId) {
                                            grecaptcha.reset(widgetId);
                                        });
                                });
                        }}
                    >
                        <Form.Item
                            label="Enter Otp"
                            name="otp"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Otp!",
                                },
                            ]}
                        >
                            <Input type="number" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Validate
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <CheckOutPage
                        onClick={(data) => {
                            onSignInSubmit(data);
                        }}
                    />
                )}
            </Modal>
            <Address />
        </div>
    );
};

export default index;
