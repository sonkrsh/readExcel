import React from "react";
import { Tabs } from "antd";
import BatteryCategory from "../../Components/BatteryCategory";
const index = () => {
    const { TabPane } = Tabs;
    return (
        <Tabs defaultActiveKey="1" tabPosition={"top"}>
            <TabPane tab={"Add Battery Category"} key={1}>
                <BatteryCategory />
            </TabPane>
        </Tabs>
    );
};

export default index;
