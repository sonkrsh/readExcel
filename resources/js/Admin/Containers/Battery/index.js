import React, { useEffect } from "react";
import { Tabs } from "antd";
import AddBattery from '../../Components/addBattery'
import { useSelector, useDispatch } from "react-redux";
import {batteryFormSubmit,batteryCompanyData,batteryModelFormSubmit,companyModelData} from './action'

function index() {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;
  const reducerProps = useSelector((state) => state.Battery);
    return (
        <div>
           <Tabs
                defaultActiveKey="2"
                tabPosition={"top"}
            >
                <TabPane tab={"Add Battery Company"} key={2}>
                    <AddBattery onload={()=>{
                        dispatch(batteryCompanyData());
                        dispatch(companyModelData())
                        }} companyData={reducerProps.batteryCompany} onsubmit={(event)=>dispatch(batteryFormSubmit(event))} batteryModel={(event)=>dispatch(batteryModelFormSubmit(event))} 
                        batteryCompanyModelData={reducerProps.batteryCompanyModel}
                        />
                </TabPane>
                <TabPane tab={"Add Model"} key={3}>
                  
                </TabPane>
                <TabPane tab={"Add Fuel"} key={4}>
                 
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
