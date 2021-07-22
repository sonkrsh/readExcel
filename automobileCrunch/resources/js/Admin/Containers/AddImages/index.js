import React, { useEffect, useState } from "react";
import { Tabs, Card, Row, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import BannerImage from "../../Components/addImages";
import { addImage, getImages, deleteImage,editImage } from "./actions";
import { isEmpty } from "lodash";
import HomePage from "../../Components/getHomeAndLogoImage/homePage";
import Logo from "../../Components/getHomeAndLogoImage/logo";

function index() {
    const [logoURl, setlogoURl] = useState("");

    const dispatch = useDispatch();
    const { TabPane } = Tabs;

    const reducerProps = useSelector((state) => state.AddImages);

    const { homePageData, loading, logoData,editLoading } = reducerProps;

    useEffect(() => {
        dispatch(getImages());
    }, []);

    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition={"top"}>
                <TabPane tab={"Add Logo Image"} key={1}>
                    <Logo
                        imageData={logoData}
                        loading={loading}
                        onSubmit={(e) => dispatch(addImage(e))}
                        onDelete={(e)=>dispatch(deleteImage(e))}
                        onEdit={(e)=>dispatch(editImage(e))}
                        editLoading={editLoading}
                    />
                </TabPane>

                <TabPane tab={"Add HomePage Image"} key={2}>
                    <HomePage
                        imageData={homePageData}
                        loading={loading}
                        onSubmit={(e) => dispatch(addImage(e))}
                        onDelete={(e)=>dispatch(deleteImage(e))}
                        onEdit={(e)=>dispatch(editImage(e))}
                        editLoading={editLoading}
                    />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
