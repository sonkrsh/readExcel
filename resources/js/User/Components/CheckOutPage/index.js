import React from "react";
import { Form, Input, Button } from "antd";
const index = ({ onClick }) => {
    return (
        <Form
            name="basic"
            onFinish={(value) => onClick(value)}
        >
            <Form.Item
                label="Enter Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input your Name!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Enter Phone Number"
                name="phoneNo"
                rules={[
                    {
                        required: true,
                        message: "Please input your Phone Number!",
                    },
                ]}
            >
                <Input type="number" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Check
                </Button>
            </Form.Item>
        </Form>
    );
};

export default index;
