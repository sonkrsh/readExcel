import React, { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import Make from "./make";
import Model from "./model";
import Fuel from "./fuel";
import Location from "./location";
import "./style.css";

function index() {
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

    return (
        <div className="site-card-border-less-wrapper">
            <Card
                title="AutomobileCrunch"
                bordered={false}
                style={{ textAlign: "center" }}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Location" name="location">
                        <Input onClick={() => settrigger(1)} />
                    </Form.Item>
                    <Form.Item label="Select You Car" name="car">
                        <Input onClick={() => settrigger(2)} />
                    </Form.Item>
                </Form>

                {trigger === 1 ? (
                    <div className="child_drop">
                        <Location
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
