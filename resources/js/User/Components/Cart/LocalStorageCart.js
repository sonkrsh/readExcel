import React from "react";
import { Tabs, Card, Row, Col } from "antd";
import "./style.css";
import StyledButton from "../StyledComponents/StyledButton";
import { DeleteOutlined } from "@ant-design/icons";

function LocalStorageCart({ cartItem, removeCartItem, total,props }) {
    const { TabPane } = Tabs;

    return (
        <div className="rightSideBar">
            <Tabs
                onTabScroll
                type="card"
                tabBarGutter={20}
                id="batteryTab"
                animated
                centered
                size="small"
            >
                <TabPane
                    tab={
                        <div>
                            <div>your Cart</div>
                        </div>
                    }
                    key="1"
                >
                    {cartItem.map((value, key, { length }) => {
                        return (
                            <Card key={key}>
                                <Row gutter={[16, 16]}>
                                    <Col lg={13} xl={13}>
                                        {`${value.name}${" "}${
                                            value.batteryModel_name
                                        }`}
                                    </Col>
                                    <Col lg={9} xl={9}>
                                        {`${value.cartPrice}`}
                                    </Col>
                                    <Col lg={2} xl={2}>
                                        <DeleteOutlined
                                            onClick={() =>
                                                removeCartItem(value.id)
                                            }
                                        />
                                    </Col>
                                </Row>
                            </Card>
                        );
                    })}

                    <h3 style={{ display: "flex", justifyContent: "center" }}>
                        Total: {total}
                    </h3>
                    <div className="btnToProcced">
                        <StyledButton a text="Procced To Checkout" onClick={()=>props.history.push("/checkout")}/>
                    </div>
                </TabPane>
                <TabPane
                    tab={
                        <div>
                            <div>Request For CallBack</div>
                        </div>
                    }
                    key="2"
                ></TabPane>
            </Tabs>
        </div>
    );
}

export default LocalStorageCart;
