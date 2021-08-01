import React, { useState } from "react";
import MakeModelFuelLocation from "../../utils/makeModelFuelLocation";
import { Form, Input, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function index({ onSubmit, glassCategoryData }) {
    const [form] = Form.useForm();
    const [modelNDfuelId, setmodelNDfuelId] = useState({
        modelid: null,
        fuelid: null,
        locationid: null,
    });

    const onFinish = (value) => {
        const allData = { ...modelNDfuelId, ...value };
        onSubmit(allData);
    };
    return (
        <div>
            <MakeModelFuelLocation
                onclick={(event) =>
                    setmodelNDfuelId({
                        modelid: event?.modelid
                            ? event?.modelid
                            : modelNDfuelId.modelid,
                        fuelid: event?.fuelid
                            ? event?.fuelid
                            : modelNDfuelId.fuelid,
                        locationid: event?.locationid
                            ? event?.locationid
                            : modelNDfuelId.locationid,
                    })
                }
            />

            <Form
                form={form}
                layout="vertical"
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Select glass Category"
                    name="glass_category"
                    rules={[
                        {
                            required: true,
                            message: "Please input !",
                        },
                    ]}
                >
                    <Select
                        style={{ width: "100%" }}
                        showSearch
                        placeholder="Select a Glass Category"
                        filterOption={(input, option) =>
                            option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {glassCategoryData?.glassCategory.map((value, key) => (
                            <Option key={key} value={value.id}>
                                {value.glass_category_name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Enter Original Price"
                    name="original_price"
                    rules={[
                        {
                            required: true,
                            message: "Please input!",
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    label="Enter Discount Price"
                    name="discount_price"
                    rules={[
                        {
                            required: true,
                            message: "Please input!",
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>
                <Button
                    type="primary"
                    shape="round"
                    htmlType="submit"
                    icon={<PlusOutlined />}
                    //size={size}
                >
                    Add Glass
                </Button>
            </Form>
        </div>
    );
}

export default index;
