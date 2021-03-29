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
                <TabPane tab={"Add Make"} key={2}>
                   {/*  <AddMake
                        onsubmit={(event) => handleMakeName(event)}
                        makeData={reducerProps.makeData}
                    /> */}
                </TabPane>
                <TabPane tab={"Add Model"} key={3}>
                    {/* <AddModel
                        onsubmit={(event) => handleModelName(event)}
                        onload={() => dispatch(modelData())}
                        makeData={reducerProps.makeData}
                        modelData={reducerProps.modelData}
                    /> */}
                </TabPane>
                <TabPane tab={"Add Fuel"} key={4}>
                   {/*  <AddFuel onsubmit={(event) => handleFuelName(event)} onload={()=>dispatch(fuelData())}  fuelData={reducerProps.fuelData}/> */}
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
