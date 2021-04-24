import React, { useEffect, useState } from "react";
import { Tabs, Card, Row, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import BannerImage from "../../Components/addImages";
import { addImage, getImages } from "./actions";
import { isEmpty } from "lodash";

function index() {
    const [logoURl, setlogoURl] = useState("");

    const dispatch = useDispatch();
    const { TabPane } = Tabs;
    const { Meta } = Card;

    const reducerProps = useSelector((state) => state.AddImages);

    useEffect(() => {
        dispatch(getImages());
    }, []);
    useEffect(() => {
        (reducerProps?.imageData).map((value, key) => {
            if (value?.type == "logo") {
                setlogoURl(value?.url);
            }
        });
    }, [reducerProps]);

    return (
        <div>
            <Tabs defaultActiveKey="2" tabPosition={"top"}>
                <TabPane tab={"Add Logo Image"} key={2}>
                    
                        {isEmpty(logoURl) ? (
                            <BannerImage
                                loadingButton={reducerProps?.loading}
                                label={"Add Image"}
                                buttonSeen={true}
                                type={"logo"}
                                onSubmit={(event) => {
                                    dispatch(addImage(event));
                                }}
                            />
                        ) : null}

                        <Row justify={"space-between"} wrap>
                            <div className="buutons">
                                <Button type="dashed">Edit</Button>
                                <Button danger>Delete</Button>
                            </div>
                            <div className="logo" className="boxSpace">
                            <Card
                            bodyStyle={{paddingTop:'4rem'}}
                                hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src={logoURl} />}
                            >
                                <Meta title="Logo Image" />
                            </Card>
                            </div>
                        </Row>
                    
                </TabPane>

                <TabPane tab={"Add HomePage Image"} key={3}>
                    <BannerImage
                        loadingButton={reducerProps?.loading}
                        label={"Add HomePage Image"}
                        buttonSeen={true}
                        type={"homePage"}
                        onSubmit={(event) => {
                            dispatch(addImage(event));
                        }}
                    />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
