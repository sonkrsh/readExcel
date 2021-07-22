import React, { useEffect } from "react";
import { Tabs } from "antd";
import AddMake from "../../Components/addMake";
import AddModel from "../../Components/addModel";
import AddFuel from "../../Components/addFuel";
import AddLocation from '../../Components/addLocation'
import { useSelector, useDispatch } from "react-redux";
import {
    makeFormSubmit,
    makeData,
    modelFormSubmit,
    modelData,
    fuelFormSubmit,
    fuelData,
    locationFormSubmit,
    locationData
} from "./action";

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

    const handleFuelName = (values) => {
        dispatch(fuelFormSubmit(values));
    };

    return (
        <div>
            <Tabs defaultActiveKey="2" tabPosition={"top"}>
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
                    <AddFuel
                        onsubmit={(event) => handleFuelName(event)}
                        onload={() => dispatch(fuelData())}
                        fuelData={reducerProps.fuelData}
                    />
                </TabPane>
                <TabPane tab={"Add Location"} key={5}>
                    <AddLocation onsubmit={(event)=>dispatch(locationFormSubmit(event))} onload={()=>{dispatch(locationData())}} locationData={reducerProps.locationData}/>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
