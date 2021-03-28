import React, { useEffect } from "react";
import { Tabs } from "antd";
import AddMake from "../../Components/addMake";
import AddModel from "../../Components/addModel";
import { useSelector, useDispatch } from "react-redux";
import { makeFormSubmit, makeData, modelFormSubmit, modelData } from "./action";

function index() {
    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const reducerProps = useSelector((state) => state.MakeModelFuelreducer);

    useEffect(() => {
        dispatch(makeData());
    }, []);

    const handleMakeName = (values) => {
        dispatch(makeFormSubmit(values));
    };

    const handleModelName = (values) => {
        dispatch(modelFormSubmit(values));
    };

    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                tabPosition={"top"}
                style={{ height: "100vh" }}
            >
                <TabPane tab={"Dashboard"} key={1}>
                    DashBoard
                </TabPane>
                <TabPane tab={"Add Make"} key={2}>
                    <AddMake
                        onsubmit={(event) => handleMakeName(event)}
                        makeData={reducerProps.makeData}
                    />
                </TabPane>
                <TabPane tab={"Add Model"} key={3}>
                    <AddModel
                        onsubmit={(event) => handleModelName(event)}
                        onload={() => dispatch(modelData())}
                        makeData={reducerProps.makeData}
                        modelData={reducerProps.modelData}
                    />
                </TabPane>
                <TabPane tab={"Add Fuel"} key={4}>
                    Add Fuel
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
