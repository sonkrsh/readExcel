import React from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const index = () => {
    const [form] = Form.useForm();

    const onFinish = (value) => {
        onsubmit(value);
        form.resetFields();
    };
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Add Make"
                    name="make"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Make!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button
                    type="primary"
                    shape="round"
                    htmlType="submit"
                    icon={<PlusOutlined />}
                    //size={size}
                >
                    Add Glass Category
                </Button>
            </Form>
        </div>
    );
};

export default index;
