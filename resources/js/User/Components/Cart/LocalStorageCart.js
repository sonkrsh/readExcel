import React from "react";
import { Tabs, Card } from "antd";
import "./style.css";
import StyledButton from "../StyledComponents/StyledButton";
import Form from "antd/lib/form/Form";
import size from "lodash/size";
function LocalStorageCart({ cartItem, removeCartItem,total }) {
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
                                <Form></Form>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <>
                                        <h4>
                                            {`${value.name}${" "}${
                                                value.batteryModel_name
                                            }`}
                                        </h4>
                                        <h5>{`${value.cartPrice}`}</h5>
                                    </>
                                    <>
                                        <StyledButton
                                            text={"delete"}
                                            buttonColor="black"
                                            color={"white"}
                                            onClick={() =>
                                                removeCartItem(value.id)
                                            }
                                        />
                                    </>
                                </div>
                            </Card>
                        );
                    })}
                    <h3>Total: {total}</h3>
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
