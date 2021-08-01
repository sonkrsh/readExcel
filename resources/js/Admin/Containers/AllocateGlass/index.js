import React, { useEffect } from "react";
import AllocateBattery from "../../Components/allocateBattery";
import { modelData, fuelData, locationData } from "../Make-Model-Fuel/action";
import { companyModelData } from "../Battery/action";
import { useDispatch, useSelector } from "react-redux";
import { getGlassCategory, addGlassPrice } from "./actions";
import { Tabs } from "antd";
import AllocateGlass from "../../Components/AllocateGlass";

function index() {
    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const reducerProps = useSelector((state) => state.AllocateGlass);
    useEffect(() => {
        dispatch(modelData());
        dispatch(fuelData());
        dispatch(locationData());
        dispatch(companyModelData());
        dispatch(getGlassCategory());
    }, []);

    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition={"top"}>
                <TabPane tab={"Allocate Glass"} key={1}>
                    <AllocateGlass
                        glassCategoryData={reducerProps}
                        onSubmit={(data) => dispatch(addGlassPrice(data))}
                    />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
