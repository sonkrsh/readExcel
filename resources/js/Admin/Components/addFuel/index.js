import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GetFuel from "./getFuel";

function index({ onsubmit, onload ,fuelData}) {
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
                    label="Add Fuel"
                    name="fuel"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Fuel!",
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
                    Add Fuel
                </Button>
            </Form>
            <div className="makeDashboard">
               { <GetFuel fuelData={fuelData} />}
            </div>
        </div>
    );
}

export default index;
