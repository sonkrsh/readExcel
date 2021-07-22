import React, { useEffect } from "react";
import AllocateBattery from "../../Components/allocateBattery";
import { modelData, fuelData, locationData } from "../Make-Model-Fuel/action";
import { companyModelData } from "../Battery/action";
import { useDispatch,useSelector } from "react-redux";
import { formSubmit,getProductData } from "./actions";
import { Tabs } from "antd";
import GetBattery from '../../Components/allocateBattery/getBattery'

function index() {
    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const reducerProps = useSelector((state) => state.AllocateBattery);

    useEffect(() => {
        dispatch(modelData());
        dispatch(fuelData());
        dispatch(locationData());
        dispatch(companyModelData());
        dispatch(getProductData())
    }, []);

    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition={"top"}>
                <TabPane tab={"Dashboard"} key={1}>
                <GetBattery productData= {reducerProps.productData}/>

                </TabPane>
                <TabPane tab={"Add Products"} key={2}>
                    <AllocateBattery
                        onSubmit={(event) => {
                            dispatch(formSubmit(event));
                        }}
                    />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
