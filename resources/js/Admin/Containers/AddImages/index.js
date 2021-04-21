import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import BannerImage from "../../Components/addImages";
import { addImage } from "./actions";

function index() {
    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const reducerProps = useSelector((state) => state.AddImages);
    
    return (
        <div>
            <Tabs defaultActiveKey="2" tabPosition={"top"}>
                <TabPane tab={"Add Banner"} key={2}>
                    <BannerImage
                        loadingButton={reducerProps?.loading}
                        label={"Add Image"}
                        buttonSeen={true}
                        type={"banner"}
                        onSubmit={(event) => {
                            dispatch(addImage(event));
                        }}
                    />
                </TabPane>
                <TabPane tab={"Add HomePage Image"} key={3}></TabPane>
            </Tabs>
        </div>
    );
}

export default index;
