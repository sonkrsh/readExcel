import React from "react";
import { Tabs } from "antd";
import GlassesCategory from "../../Components/GlassesCategory";
import { addGlassCategory } from "./action";
import { useSelector, useDispatch } from "react-redux";

const index = () => {
    const { TabPane } = Tabs;
    const dispatch = useDispatch();
    return (
        <Tabs defaultActiveKey="1" tabPosition={"top"}>
            <TabPane tab={"Add Battery Category"} key={1}>
                <GlassesCategory
                    onSubmit={(data) => dispatch(addGlassCategory(data))}
                />
            </TabPane>
        </Tabs>
    );
};

export default index;
