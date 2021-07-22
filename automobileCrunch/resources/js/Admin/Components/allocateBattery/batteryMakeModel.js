import React from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button,Select } from "antd";

function batteryMakeModel({onclick}) {
    const [form] = Form.useForm();
    const reducerProps = useSelector((state) => state.Battery);
    const batteryCompanyModel = reducerProps.batteryCompanyModel;
    const { Option } = Select;
    return (
        <Form form={form} layout="vertical" name="basic"/*  onFinish={onFinish} */>
            <Form.Item
                label="Select a Battery"
                name="battery"
                rules={[
                    {
                        required: true,
                        message: "Please input your battery!",
                    },
                ]}
            >
                <Select
                   onSelect={(value) => onclick(value)}
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Select a Battery"
                    filterOption={(input, option) =>
                        option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {batteryCompanyModel.map((value, key) => (
                        <Option key={key} value={value.id}>
                            {value.name + ", " + value.batteryModel_name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    );
}

export default batteryMakeModel;
