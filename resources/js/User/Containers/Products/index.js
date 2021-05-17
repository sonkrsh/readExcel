import React, { useEffect } from "react";
import { BoldOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { getProducts } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Drawer,Tabs } from "antd";
import BatteryProducts from "../../Components/BatteryProducts";
import "./style.css";
import StyledImage from "../../Components/StyledComponents/StyledImage";
import RightSideBar from '../../Components/StyledComponents/RightSideBar';


function index() {
    const { TabPane } = Tabs;
    const dispatch = useDispatch();
    let { makeName, modelName, locationName, fuelName } = useParams();

    const originReducer = useSelector((state) => state?.Products);
    const { allBattery } = originReducer;

    useEffect(() => {
        const combineData = {
            makeName: makeName,
            modelName: modelName,
            fuelName: fuelName,
            locationName: locationName,
        };
        dispatch(getProducts(combineData));
    }, []);

    return (
        <Row>
            <Col lg={18} md={24} xs={24} xl={18}>
                <Tabs
                    type="card"
                    tabBarGutter={30}
                    id="batteryTab"
                    animated
                    centered
                    size="small"
                >
                    <TabPane
                        tab={
                            <div>
                                <div>
                                    <BoldOutlined />
                                </div>
                                <div>Battery</div>
                            </div>
                        }
                        key="1"
                    >
                        <Row>
                            <StyledImage
                                url={
                                    "https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg"
                                }
                            />
                        </Row>

                        <BatteryProducts allBattery={allBattery} />
                          <BatteryProducts allBattery={allBattery} />
                    </TabPane>
                    <TabPane tab="Glass" key="2"></TabPane>
                    <TabPane tab="Others" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Col>
            <Col lg={6} md={0} xs={0} xl={6}>
               <RightSideBar/>
            </Col>
        </Row>
    );
}

export default index;
