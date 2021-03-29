import React, { useEffect } from "react";
import { Tabs } from "antd";


function index() {
  const { TabPane } = Tabs;

    return (
        <div>
           <Tabs
                defaultActiveKey="2"
                tabPosition={"top"}
                style={{ height: "100vh" }}
            >
                <TabPane tab={"Add Battery Company"} key={2}>
               
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
