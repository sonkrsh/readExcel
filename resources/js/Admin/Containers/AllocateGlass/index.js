import React, { useEffect } from "react";
import AllocateBattery from "../../Components/allocateBattery";
import { modelData, fuelData, locationData } from "../Make-Model-Fuel/action";
import { companyModelData } from "../Battery/action";
import { useDispatch, useSelector } from "react-redux";
import { formSubmit, getProductData } from "./actions";
import { Tabs } from "antd";
import AllocateGlass from "../../Components/AllocateGlass";

function index() {
    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const reducerProps = useSelector((state) => state.AllocateBattery);

    useEffect(() => {
        dispatch(modelData());
        dispatch(fuelData());
        dispatch(locationData());
        dispatch(companyModelData());
    }, []);

    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition={"top"}>
                <TabPane tab={"Allocate Glass"} key={1}>
                    <AllocateGlass />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
