import React from "react";
import { Form, Input, Button, Select } from "antd";

const index = () => {
    const { Option } = Select;

    const onFinish = () => {};
    return (
        <Form form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name="note"
                label="Add User Mail(to)"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Add User Mail(cc)"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Add User Mail(bcc)"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default index;
