import React from "react";
import { Form, Input, Button } from "antd";
const address = () => {
    return (
        <Form name="basic" /* onFinish={onFinish} */>
            <h3>Please Enter Installtion Address & Date Time</h3>
            <Form.Item
                label="Enter Address"
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
                label="Instalation Date & Time"
                name="installation_date"
                rules={[
                    {
                        required: true,
                        message: "Please Select Date And Time!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Verify
                </Button>
            </Form.Item>
        </Form>
    );
};

export default address;
