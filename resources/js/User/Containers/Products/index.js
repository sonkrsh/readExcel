import React, { useEffect } from "react";
import { BoldOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { getProducts, addToCart, deleteItemFromCart } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Tabs, Card } from "antd";
import BatteryProducts from "../../Components/BatteryProducts";
import "./style.css";
import StyledImage from "../../Components/StyledComponents/StyledImage";
import LocalStorageCart from "../../Components/Cart/LocalStorageCart";

function index(props) {
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

    useEffect(() => {
        dispatch(addToCart("", allBattery));
    }, [allBattery]);

    return (
        <Row>
            <Col lg={18} md={24} xs={24} xl={18}>
                <Tabs
                    className="custom-tab"
                    type="card"
                    tabBarGutter={30}
                    id="batteryTab"
                    animated
                    centered
                    size="small"
                >
                    <TabPane
                        tabBarStyle={{ backgroundColor: "gray" }}
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
                        <Card>
                            <StyledImage
                                url={
                                    "https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg"
                                }
                            />
                        </Card>
                        <BatteryProducts
                            allBattery={allBattery}
                            onclick={(data) =>
                                dispatch(addToCart(data, allBattery))
                            }
                            cartItem={originReducer?.cart}
                        />
                    </TabPane>
                    <TabPane tab="Glass" key="2"></TabPane>
                    <TabPane tab="Others" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Col>
            <Col lg={6} md={0} xs={0} xl={6}>
                <LocalStorageCart
                    props={props}
                    cartItem={originReducer?.cart}
                    total={originReducer?.total}
                    removeCartItem={(removeId) =>
                        dispatch(deleteItemFromCart(removeId, allBattery))
                    }
                />
            </Col>
        </Row>
    );
}

export default index;
