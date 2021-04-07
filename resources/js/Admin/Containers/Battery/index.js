import React, { useEffect } from "react";
import { Tabs } from "antd";
import AddBattery from "../../Components/addBattery";
import { useSelector, useDispatch } from "react-redux";
import {
    batteryFormSubmit,
    batteryCompanyData,
    batteryModelFormSubmit,
    companyModelData,
} from "./action";
import GetBatteryCompanyModel from "../../Components/addBattery/getBatteryCompanyModel";

function index() {
    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const reducerProps = useSelector((state) => state.Battery);

    useEffect(() => {
       dispatch(companyModelData())
    }, [])
    
    return (
        <div>
            <Tabs defaultActiveKey="2" tabPosition={"top"}>
                <TabPane tab={"Dashboard"} key={2}>
                    <GetBatteryCompanyModel
                        batteryCompanyModelData={
                            reducerProps.batteryCompanyModel
                        }
                    />
                </TabPane>
                <TabPane tab={"Add Battery"} key={3}>
                    <AddBattery
                        onload={() => {
                            dispatch(batteryCompanyData());
                        }}
                        companyData={reducerProps.batteryCompany}
                        onsubmit={(event) => dispatch(batteryFormSubmit(event))}
                        batteryModel={(event) =>
                            dispatch(batteryModelFormSubmit(event))
                        }
                    />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
