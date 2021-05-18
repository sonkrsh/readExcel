import React, { useState } from "react";
import { Row, Col, Button, Card, Avatar, Checkbox } from "antd";
import { Tabs } from "antd";
import StyledImage from "../StyledComponents/StyledImage";
import StyledText from "../StyledComponents/StyledText";
import "./style.css";
import StyledButton from "../StyledComponents/StyledButton";

function index({ allBattery }) {
    const { TabPane } = Tabs;
    const { Meta } = Card;

    const Checkboxfunction = (value) => {
        const [priceSelect, setpriceSelect] = useState(1);
        return (
            <>
                <div className="BatteryPrice">
                    <div className="price">
                        <StyledText
                            Text={`Rs${value?.priceWithExchange}`}
                            Size={"1rem"}
                            Color={"black"}
                            Weight={"bold"}
                        />
                        <StyledText
                            Text={`with Old Battery`}
                            Size={"1rem"}
                            Color={"black"}
                            Weight={"bold"}
                        />
                    </div>

                    <Checkbox
                        checked={priceSelect == 1 ? true : false}
                        onChange={(e) =>
                            e.target.checked == true
                                ? setpriceSelect(1)
                                : setpriceSelect(0)
                        }
                    >
                        {" "}
                    </Checkbox>
                </div>
                <div className="BatteryPrice">
                    <div className="price">
                        <StyledText
                            Text={`Rs${value?.priceWithExchange}`}
                            Size={"1rem"}
                            Color={"black"}
                            Weight={"bold"}
                        />
                        <StyledText
                            Text={`with Old Battery`}
                            Size={"1rem"}
                            Color={"black"}
                            Weight={"bold"}
                        />
                    </div>
                    <Checkbox
                        checked={priceSelect == 1 ? false : true}
                        onChange={(e) =>
                            e.target.checked == true
                                ? setpriceSelect(0)
                                : setpriceSelect(1)
                        }
                    >
                        {" "}
                    </Checkbox>
                </div>
            </>
        );
    };
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
                <Row gutter={[40, 16]}>
                    {allBattery.map((value, key) => {
                        let descption = JSON.parse(value?.desc);
                        return (
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                <Card
                                    style={{
                                        width: "100%",
                                        boxShadow:
                                            "rgb(0 0 0 / 12%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px",
                                    }}
                                    cover={
                                        <div
                                            style={{
                                                backgroundColor: "gray",
                                                height: "25vh",
                                            }}
                                        >
                                            <StyledImage url={value?.image} />
                                        </div>
                                    }
                                >
                                    <Meta
                                        title={
                                            <>
                                                <StyledText
                                                    Text={value?.name}
                                                    Size={"2rem"}
                                                    Color={"black"}
                                                    Weight={"bold"}
                                                />
                                                <StyledText
                                                    Text={
                                                        value?.batteryModel_name
                                                    }
                                                    Size={"2rem"}
                                                    Color={"black"}
                                                    Weight={"bold"}
                                                />

                                                {descption.map((value, key) => (
                                                    <div>
                                                        <StyledText
                                                            Text={value?.desc}
                                                            Size={"1.2rem"}
                                                            Color={"black"}
                                                            Weight={"normal"}
                                                        />
                                                    </div>
                                                ))}
                                            </>
                                        }
                                        description={
                                            <>{Checkboxfunction(value)}</>
                                        }
                                    />

                                    <StyledButton marginTop="1rem" text={"Add To Cart"} />
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        </Row>
    );
}

export default index;
