import React from "react";
import { Form, Input, Button } from "antd";
const index = () => {
    return (
        <Form name="basic" /* onFinish={onFinish} */>
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
                    Verify
                </Button>
            </Form.Item>
        </Form>
    );
};

export default index;
