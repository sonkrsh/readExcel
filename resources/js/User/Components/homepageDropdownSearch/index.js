import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import Make from "./make";
import Model from "./model";
import Fuel from "./fuel";
import Location from "./location";
import "./style.css";
import { isEqual } from "lodash";

function index({ makeArray, locationArray, makeId, modelArray, fuelArray,onSubmit }) {
    const [form] = Form.useForm();
    const [trigger, settrigger] = useState(0);

    const [locationData, setlocationData] = useState({
        id: null,
        name: null,
    });
    const [makeData, setmakeData] = useState({
        id: null,
        name: null,
    });
    const [modelData, setmodelData] = useState({
        id: null,
        name: null,
    });
    const [fuel, setfuel] = useState({
        id: null,
        name: null,
    });

    const handleLocation = (id, name) => {
        setlocationData({
            id: id,
            name: name,
        });
        form.setFieldsValue({
            location: name,
        });
    };

    const handleMake = (id, name) => {
        setmakeData({
            id: id,
            name: name,
        });
        makeId(id);
    };

    const handleModel = (id, name) => {
        setmodelData({
            id: id,
            name: name,
        });
    };
    const handlefuel = (id, name) => {
        setfuel({
            id: id,
            name: name,
        });
        form.setFieldsValue({
            car: makeData?.name + "-" + modelData?.name + "-" + name,
        });
    };

    const handleSubmit = () => {
        if (isEqual(locationData?.id, null)) {
            return form.setFields([
                {
                    name: "location",
                    errors: ["Please Input Location First !"],
                },
            ]);
        }
        if (
            isEqual(makeData?.id, null) &&
            isEqual(modelData?.id, null) &&
            isEqual(fuel?.id, null)
        ) {
            return form.setFields([
                {
                    name: "car",
                    errors: ["Please Input your Car First !"],
                },
            ]);
        }
        const combineData = {
            locationName:locationData?.name,
            makeName:makeData?.name,
            modelName:modelData?.name,
            fuelName:fuel?.name
        }
        onSubmit(combineData)
    };

    return (
        <div className="site-card-border-less-wrapper">
            <Card
                title="Find Right Price"
                bordered={false}
                style={{ textAlign: "center" }}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label=" " name="location">
                        <Input placeholder="Location" onClick={() => settrigger(1)} />
                    </Form.Item>
                    <Form.Item label=" " name="car">
                        <Input placeholder="Select Car" onClick={() => settrigger(2)} />
                    </Form.Item>
                </Form>

                {trigger === 1 ? (
                    <div className="child_drop">
                        <Location
                            locationArray={locationArray}
                            onClick={(event) => {
                                settrigger(event);
                            }}
                            selectValue={(id, name) => {
                                handleLocation(id, name);
                            }}
                        />
                    </div>
                ) : null}
                {trigger === 2 ? (
                    <div className="child_drop">
                        <Make
                            makeArray={makeArray}
                            onClick={(event) => {
                                settrigger(event);
                            }}
                            selectValue={(id, name) => {
                                handleMake(id, name);
                            }}
                        />
                    </div>
                ) : null}
                {trigger === 3 ? (
                    <div className="child_drop">
                        <Model
                            modelArray={modelArray}
                            onClick={(event) => {
                                settrigger(event);
                            }}
                            selectValue={(id, name) => {
                                handleModel(id, name);
                            }}
                        />
                    </div>
                ) : null}
                {trigger === 4 ? (
                    <div className="child_drop">
                        <Fuel
                            fuelArray={fuelArray}
                            onClick={(event) => {
                                settrigger(event);
                            }}
                            selectValue={(id, name) => {
                                handlefuel(id, name);
                            }}
                        />
                    </div>
                ) : null}
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Card>
        </div>
    );
}

export default index;
