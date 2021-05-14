import React from "react";
import { Row, Col, Button } from "antd";
import ProductBanner from "../../Components/productBanner";
import { Tabs } from "antd";

function index({ allBattery }) {
    const { TabPane } = Tabs;
    return (
        <Row gutter={[16, 16]}>
            <Col
                style={{ marginTop: "1rem" }}
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
            >
                <Row justify="space-around">
                    {allBattery.map((value, key) => {
                        let descption = JSON.parse(value?.desc);
                        return (
                            <Col
                                style={{
                                    border: "solid 0.1px gray",

                                    borderRadius: "9px",
                                    padding: "1rem",
                                }}
                                xs={23}
                                sm={23}
                                md={7}
                                lg={10}
                                xl={10}
                            >
                                <Row>
                                    <div
                                        className="upperPart"
                                        style={{ display: "flex" }}
                                    >
                                        <Col span={24}>
                                            <h1>{`${value?.name}${" "}${
                                                value?.batteryModel_name
                                            }`}</h1>
                                            <div className="battery">
                                                <div className="batteryPic">
                                                    <img
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                        }}
                                                        src={value?.image}
                                                    />
                                                </div>

                                                <div className="batteryDesc">
                                                    {descption.map(
                                                        (value, key) => (
                                                            <p key={key}>
                                                                {value?.desc}
                                                            </p>
                                                        )
                                                    )}

                                                    <div
                                                        className="lowerPart"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        {/* <p>{`Price : -${value.price}`}</p>
                                               

                                                                {/*  <p>{`Price Without Exchange : -${value.priceWithOutExchange}`}</p> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="price">
                                                <h3>Price</h3>
                                                <div className="holePrice">
                                                    <h3>
                                                        Rs:-
                                                        {
                                                            value.priceWithExchange
                                                        }
                                                    </h3>
                                                    <strike>
                                                        Rs:-
                                                        {value.price}
                                                    </strike>
                                                </div>

                                                {/*  <p>{`price With Exchange : -${value.priceWithExchange}`}</p>  */}
                                            </div>
                                        </Col>
                                    </div>

                                    <div
                                        className="addToCart"
                                        style={{
                                            textAlign: "center",
                                            width: "100%",
                                        }}
                                    >
                                        <Button
                                            type="primary"
                                            style={{
                                                width: "80%",
                                                height: "57px",
                                                backgroundColor: "gray",
                                            }}
                                            size={"large"}
                                        >
                                            Add To Cart
                                        </Button>
                                    </div>
                                </Row>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
}

export default index;
