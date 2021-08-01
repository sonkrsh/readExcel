import React, { useState } from "react";
import MakeModelFuelLocation from "../../utils/makeModelFuelLocation";
import BatteryMakeModel from "../../utils/batteryMakeModel";
import { Form, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function index({ onSubmit }) {
    const [form] = Form.useForm();
    const [modelNDfuelId, setmodelNDfuelId] = useState({
        modelid: null,
        fuelid: null,
        locationid: null,
    });
    const [battery, setbattery] = useState({
        battery: null,
    });
    const onFinish = (value) => {
        const allData = { ...modelNDfuelId, ...battery, ...value };
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
            <BatteryMakeModel
                onclick={(event) =>
                    setbattery({
                        battery: event,
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
                    label="Add Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Price!",
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    label="With Exchange Price"
                    name="withExchangeprice"
                    rules={[
                        {
                            required: true,
                            message: "Please input your with Exchange price!",
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    label="WithOut Exchange Price"
                    name="withOutExchangeprice"
                    rules={[
                        {
                            required: true,
                            message:
                                "Please input your withOut Exchange price!",
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
                    Add Make
                </Button>
            </Form>
        </div>
    );
}

export default index;
