import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addEmailName } from "./actions";

const addEmail = () => {
    const dispatch = useDispatch();
    const { Option } = Select;

    const onFinish = (value) => {
        dispatch(addEmailName(value));
    };
    return (
        <Form name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name="to"
                label="Add User Mail(to)"
                /* rules={[{ required: true }]} */
            >
                <Input type="email" />
            </Form.Item>
            <Form.Item
                name="cc"
                label="Add User Mail(cc)"
                /* rules={[{ required: true }]} */
            >
                <Input type="email" />
            </Form.Item>
            <Form.Item
                name="bcc"
                label="Add User Mail(bcc)"
                /* rules={[{ required: true }]} */
            >
                <Input type="email" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default addEmail;
