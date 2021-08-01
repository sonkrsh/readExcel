import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Select, Row, Col,Form } from "antd";

function makeModelFuelLocation({ onclick }) {
    const reducerProps = useSelector((state) => state.MakeModelFuelreducer);
    const { Option } = Select;

    const fuelData = reducerProps.fuelData;
    const locationData = reducerProps.locationData;
    const modelData = reducerProps.modelData;

    const [carDataNdlocation, setcarDataNdlocation] = useState({
        modelid: null,
        fuelid: null,
        locationid: null,
    });

    var temp = 0;
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form layout="vertical" name="basic" /*  onFinish={onFinish} */>
                    <Form.Item
                        label="Select a Car"
                        rules={[
                            {
                                required: true,
                                message: "Please input your battery!",
                            },
                        ]}
                    >
                        <Select
                            onSelect={(key, value) => {
                                const data = {
                                    modelid: value?.modelid,
                                    fuelid: value?.fuelid,
                                };
                                onclick(data);
                            }}
                            style={{ width: "100%" }}
                            showSearch
                            placeholder="Select a Car"
                            filterOption={(input, option) =>
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {modelData.map((value, key) =>
                                fuelData.map((value2, key2) => {
                                    //settemp(1+temp)
                                    temp = 1 + temp;
                                    return (
                                        <Option
                                            modelid={value.id}
                                            fuelid={value2.id}
                                            key={temp}
                                        >
                                            {value.makename +
                                                ", " +
                                                value.name +
                                                ", " +
                                                value2.name}
                                        </Option>
                                    );
                                })
                            )}
                        </Select>
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form
                    layout="vertical"
                    name="basic" /*  onFinish={onFinish} */
                >
                    <Form.Item
                        label="Select a Location"
                        rules={[
                            {
                                required: true,
                                message: "Please input your battery!",
                            },
                        ]}
                    >
                        <Select
                            onSelect={(key, value) => {
                                const data = {
                                    locationid: key,
                                };
                                onclick(data);
                            }}
                            style={{ width: "100%" }}
                            showSearch
                            placeholder="Select a Location"
                            filterOption={(input, option) =>
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {locationData.map((value, key) => (
                                <Option key={key} value={value.id}>
                                    {value.location}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default makeModelFuelLocation;
