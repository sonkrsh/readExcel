import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Radio, Checkbox, Form, Switch } from "antd";
import StyledImage from "../StyledComponents/StyledImage";
import StyledText from "../StyledComponents/StyledText";
import "./style.css";
import StyledButton from "../StyledComponents/StyledButton";
import Recommended from "../StyledComponents/Recommended";
import sample from "lodash/sample";
import { isEqual, get } from "lodash";

function index({ allBattery, onclick, cartItem }) {
    const { Meta } = Card;
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
                        const backgroundColor = sample([
                            "orange",
                            "blue",
                            "green",
                            "pink",
                        ]);
                        if (value?.recommentId) {
                            return "";
                        }
                        let descption = "";
                        if (value?.descption) {
                            descption = JSON.parse(value?.descption);
                        }

                        return (
                            <Col key={key} xs={24} sm={24} md={8} lg={8} xl={8}>
                                <Card
                                    className="boxShadow"
                                    cover={
                                        <div
                                            className={`cardHeight${" "}${backgroundColor}`}
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
                                                {descption
                                                    ? descption?.map(
                                                          (value, key) => (
                                                              <div key={key}>
                                                                  <StyledText
                                                                      Text={
                                                                          value?.desc
                                                                      }
                                                                      Size={
                                                                          "1.2rem"
                                                                      }
                                                                      Color={
                                                                          "black"
                                                                      }
                                                                      Weight={
                                                                          "normal"
                                                                      }
                                                                  />
                                                              </div>
                                                          )
                                                      )
                                                    : "    "}
                                            </>
                                        }
                                        description={
                                            <>
                                                <Form
                                                    name="basic"
                                                    onFinish={(batteryId) => {
                                                        const myObj = {
                                                            ...batteryId,
                                                            productId:
                                                                value?.id,
                                                        };
                                                        onclick(myObj);
                                                    }}
                                                    initialValues={{
                                                        batteryType: "AC-B-WE",
                                                    }}
                                                >
                                                    <Form.Item name="batteryType">
                                                        <Radio.Group
                                                            disabled={cartItem.find(
                                                                (x) =>
                                                                    x.id ==
                                                                    value.id
                                                            )}
                                                        >
                                                            <Radio value="AC-B-WE">
                                                                {`With Old Battery ${value?.priceWithExchange}`}
                                                            </Radio>
                                                            <Radio value="AC-B-WOE">
                                                                {`WithOut Old Battery ${value?.priceWithOutExchange}`}
                                                            </Radio>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <StyledButton
                                                            disabled={cartItem.find(
                                                                (x) =>
                                                                    x.id ==
                                                                    value.id
                                                            )}
                                                            marginTop="1rem"
                                                            text={"Add To Cart"}
                                                        />
                                                    </Form.Item>
                                                </Form>
                                            </>
                                        }
                                    />
                                    {allBattery?.[0]?.recommentId ==
                                    value.id ? (
                                        <Recommended />
                                    ) : (
                                        ""
                                    )}
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
