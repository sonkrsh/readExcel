import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GetModel from "./getModel";

function index({ onsubmit, makeData, onload, modelData }) {
    const [form] = Form.useForm();
    const Option = Select.Option;

    useEffect(() => {
        onload();
    }, []);

    const onFinish = (value) => {
        onsubmit(value);
        form.setFieldsValue({
            model: null,
        });
    };
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Select Make"
                    name="make"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Make!",
                        },
                    ]}
                >
                    <Select showSearch placeholder="Select a Make First">
                        {makeData
                            ? makeData.map((value, key) => (
                                  <Option key={key} value={value.id}>
                                      {value.name}
                                  </Option>
                              ))
                            : null}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Add Model"
                    name="model"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Model!",
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
                    Add Model
                </Button>
            </Form>
            <div className="makeDashboard">
                {<GetModel modelData={modelData} />}
            </div>
        </div>
    );
}

export default index;
