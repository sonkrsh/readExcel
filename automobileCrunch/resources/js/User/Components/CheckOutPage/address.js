import React from "react";
import { Form, Input, Button, DatePicker, Row, Col, Card } from "antd";
const address = () => {
    return (
        <Form name="basic" layout="vertical" /* onFinish={onFinish} */>
            <h3>Please Enter Installtion Address & Date Time</h3>
            <Row gutter={[16, 16]}>
                <Col xs={12} lg={12}>
                    <Form.Item
                        label="Installation Address "
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Dilivery Address!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="LandMark"
                        name="landmark"
                        rules={[
                            {
                                required: true,
                                message: "Please input your LandMark!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Location"
                        name="location"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Location!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Instalation Date & Time"
                        name="installation_date"
                        rules={[
                            {
                                required: true,
                                message: "Please Select Date And Time!",
                            },
                        ]}
                    >
                        <DatePicker
                            showTime={{ format: "HH:mm" }}
                            showToday={true}
                            format={"YYYY-MM-DD HH:mm"}
                            placeholder="When do you need this service by"

                            /*   onChange={(e) =>
                        this.setStateDateValues(e, "other_service_time")
                    }
                    onOk={(e) =>
                        this.setStateDateValues(e, "other_service_time")
                    } */
                        />
                    </Form.Item>
                </Col>
                <Col xs={12} lg={12}>
                    <h3>Your Order Details</h3>
                    <Card>
                        <p>Item 1</p>
                        <p>Iem 2</p>
                        <p>Iem 3</p>
                    </Card>
                    <Form.Item
                        label="%   Apply Coupon"
                        name="coupan"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Co upan!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col xs={15} lg={15}></Col>
                <Col xs={9} lg={9}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            CONFIRM
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default address;
