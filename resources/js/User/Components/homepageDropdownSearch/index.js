import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import Make from "./make";
import Model from "./model";
import Fuel from "./fuel";
import Location from "./location";
import "./style.css";
import { isEqual } from "lodash";
import StyledButton from "../StyledComponents/StyledButton";

function index({
    makeArray,
    locationArray,
    makeId,
    modelArray,
    fuelArray,
    onSubmit,
}) {
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
            locationName: locationData?.name,
            makeName: makeData?.name,
            modelName: modelData?.name,
            fuelName: fuel?.name,
        };
        onSubmit(combineData);
    };

    return (
        <div className="site-card-border-less-wrapper">
            <Card
                id="homePageCard"
                title={
                    <div className="filterHeading">
                        <h4>No Need Visit Workshop.</h4>
                        <h4>Get Replaced At Your Doorstep.</h4>
                    </div>
                }
                bordered={false}
                style={{ textAlign: "center", borderRadius: "5px" }}
            >
                <h2>Get Instant Affordable Quotes</h2>
                <Form
                    style={{ margin: 0, paddingBottom: "2rem" }}
                    form={form}
                    layout="vertical"
                >
                    <Form.Item style={{ margin: 0 }} label=" " name="location">
                        <Input
                            className="inputBorder"
                            placeholder={"Location"}
                            onClick={() => settrigger(1)}
                        />
                    </Form.Item>
                    <Form.Item label=" " name="car">
                        <Input
                            className="inputBorder"
                            placeholder="Select Car"
                            onClick={() => settrigger(2)}
                        />
                    </Form.Item>
                </Form>
                <StyledButton
                    text={"Check Best Price"}
                    fontSize={"1.5rem"}
                    onClick={handleSubmit}
                />

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
            </Card>
        </div>
    );
}

export default index;
