import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GetLocation from "./getLocation";

function index({ onsubmit, onload ,locationData}) {
    const [form] = Form.useForm();

    useEffect(() => {
        onload();
    }, [])

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
                    label="Add Location"
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
                <Button
                    type="primary"
                    shape="round"
                    htmlType="submit"
                    icon={<PlusOutlined />}
                    //size={size}
                >
                    Add Location
                </Button>
            </Form>
            <div className="makeDashboard">
               {<GetLocation locationData={locationData} />}
            </div>
        </div>
    );
}

export default index;
