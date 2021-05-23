import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import { Card } from "antd";
const MySideBar = styled.div`
    border: 1px solid;
    height: 89%;
    position: fixed;
    width: 25%;
    padding: 1rem;
`;

function RightSideBar({ cartItem }) {
    console.log("=====>", cartItem);
    const { TabPane } = Tabs;
    return (
        <MySideBar>
            {" "}
            <Tabs
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
                    {cartItem.map((value, key) => {
                        return (
                            <Card>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <h4>
                                        {`${value.name}${" "}${
                                            value.batteryModel_name
                                        }`}
                                    </h4>
                                    <h5>{`${value.cartPrice}`}</h5>
                                </div>
                            </Card>
                        );
                    })}
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
        </MySideBar>
    );
}

export default RightSideBar;
