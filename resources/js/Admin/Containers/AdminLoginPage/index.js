import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Card, Modal } from "antd";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchingFormValue, otpCheck } from "./actions";
import { useHistory } from "react-router-dom";

function index(props) {
    const history = useHistory();
    const reducerProps = useSelector((state) => state.AdminLoginPage);

    const dispatch = useDispatch();

    const [modalVisible, setmodalVisible] = useState(null);
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);

    const onFinish = (values) => {
        setemail(values.email);
        setpassword(values.password);
        dispatch(fetchingFormValue(values));
    };

    useEffect(() => {
        setmodalVisible(reducerProps.loginSucced);
    }, [reducerProps.loginSucced]);

    useEffect(() => {
        if (reducerProps.otpVerified) {
            history.push("Dashboard");
        }
        if (reducerProps.master) {
            history.push("/Dashboard");
        }
    }, [reducerProps.master, reducerProps.otpVerified]);

    return (
        <Row align="middle" justify="center" style={{ height: "100vh" }}>
            {modalVisible ? (
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={modalVisible}
                    footer={null}
                    /*                     okText="Verify Otp"
                    onOk={() => dispatch(otpCheck({ ...e, email,password }))}
                    onCancel={() => setmodalVisible(false)} */
                >
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={(e) => {
                            dispatch(otpCheck({ ...e, email, password }));
                        }}
                    >
                        <Form.Item
                            name="remember_token"
                            label="Enter Your Otp"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Otp!",
                                },
                            ]}
                        >
                            <Input type="number" />
                        </Form.Item>
                        <Form.Item align="middle">
                            <Button
                                type="primary"
                                /* disabled={reducerProps.loading} loading={reducerProps.loading} */ htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            ) : (
                <Col xs={{ span: 22 }} lg={{ span: 10 }}>
                    <Card>
                        <div className="heading">
                            <h3>Read Excel</h3>
                        </div>

                        <Form
                            layout="vertical"
                            name="basic"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: "email",
                                        message:
                                            "The input is not valid E-mail!",
                                    },
                                    {
                                        required: true,
                                        message: "Please input your E-mail!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item align="middle">
                                <Button
                                    type="primary"
                                    disabled={reducerProps.loading}
                                    loading={reducerProps.loading}
                                    htmlType="submit"
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                    ,
                </Col>
            )}
        </Row>
    );
}

export default index;
