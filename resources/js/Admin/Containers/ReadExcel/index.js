import React, { useEffect, useState } from "react";
import { fetchExcelData, fetchSheetName, sendEmail } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Table, Tabs, Row, Col, Select } from "antd";
import get from "lodash/get";
import trim from "lodash/trim";
import groupBy from "lodash/groupBy";
import floor from "lodash/floor";
import sumBy from "lodash/sumBy";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import isNaN from "lodash/isNaN";
import remove from "lodash/remove";
import toNumber from "lodash/toNumber";
import columnName from "./columnName";
import isEqual from "lodash/isEqual";
import AddEmail from "./addEmail";

function index() {
    const dispatch = useDispatch();
    const { Option } = Select;
    const [sheetName, setsheetName] = useState(null);
    const [sheetData, setsheetData] = useState(null);
    const [onLoadCall, setonLoadCall] = useState(false);
    const reducerProps = useSelector((state) => state.ReadExcel);
    const [dataSource, setdataSource] = useState([]);
    var updatedArray = [];
    const { TabPane } = Tabs;

    useEffect(() => {
        dispatch(fetchExcelData());
    }, []);

    useEffect(() => {
        if (get(reducerProps, "sheetName.sheet_name")) {
            setsheetName(get(reducerProps, "sheetName.sheet_name"));
            setonLoadCall(true);
        }
    }, [reducerProps]);

    useEffect(() => {
        setsheetData(reducerProps.sheetData);
    }, [reducerProps.sheetData]);

    useEffect(() => {
        for (let i = 0; i <= sheetData?.length - 1; i++) {
            for (let j = 0; j <= sheetData[0].length - 1; j++) {
                var lock = {
                    ...lock,
                    [trim(sheetData[0][j])]: trim(sheetData[i][j]),
                };
            }
            updatedArray.push(lock);
        }
        const groupData = groupBy(updatedArray, "Category");
        const result = map(groupData, function (items, name) {
            let requirement = 0;
            let orderPlaced = 0;
            let inventory = 0;
            let dilivered = 0;
            map(items, (data) => {
                inventory += isNaN(toNumber(get(data, "Inventory")))
                    ? 0
                    : toNumber(get(data, "Inventory"));
                requirement += isNaN(toNumber(get(data, "October Requirement")))
                    ? 0
                    : toNumber(get(data, "October Requirement"));
                orderPlaced += isNaN(toNumber(get(data, "Order Placed")))
                    ? 0
                    : toNumber(get(data, "Order Placed"));
                dilivered += isNaN(toNumber(get(data, "Delivered Quantity")))
                    ? 0
                    : toNumber(get(data, "Delivered Quantity"));
            });
            return {
                Product_Category: name,
                Inventory: inventory,
                Requirement: requirement,
                Order_Placed: orderPlaced,
                Dilivered: dilivered,
            };
        });

        const updatedTableData = remove(result, function (n, i) {
            if (i == 0) {
            } else {
                return n;
            }
        });
        const orderPlaced = sumBy(updatedTableData, (data) => {
            return data.Order_Placed;
        });
        const orderRequirement = sumBy(updatedTableData, (data) => {
            return data.Requirement;
        });

        const orderPlacedPercentage = (orderPlaced / orderRequirement) * 100;
        updatedTableData.push({
            orderPlacedPercentage: floor(orderPlacedPercentage, 2),
        });

        /* Above Table is used for Filter */
        const target = groupBy(updatedArray, "Target Delivery Week");
        /* updatedTableData.push({
            oneToTen: get(target, "1-10")?.length
                ? get(target, "1-10")?.length
                : 0,
            elevenToTwenty: get(target, "11-20")?.length
                ? get(target, "11-20")?.length
                : 0,
            twentyOneToThirty: get(target, "21-30")?.length
                ? get(target, "21-30")?.length
                : 0,
        }); */
        var oneToTen = 0;
        var elevenToTwenty = 0;
        var twentyOneToThirty = 0;
        var achievedOneToTen = 0;
        var achievedEleventToTwenty = 0;
        var achievedTwentyOneToThirty = 0;
        map(target, (ddata, name) => {
            if (isEqual(trim(name), "1-10")) {
                map(ddata, (upddata) => {
                    oneToTen += isNaN(toNumber(get(upddata, "Order Qty")))
                        ? 0
                        : toNumber(get(upddata, "Order Qty"));
                    achievedOneToTen += isNaN(
                        toNumber(get(upddata, "Qty Already Delivered"))
                    )
                        ? 0
                        : toNumber(get(upddata, "Qty Already Delivered"));
                });
            }
            if (isEqual(trim(name), "11-20")) {
                map(ddata, (upddata) => {
                    elevenToTwenty += isNaN(toNumber(get(upddata, "Order Qty")))
                        ? 0
                        : toNumber(get(upddata, "Order Qty"));
                    achievedEleventToTwenty += isNaN(
                        toNumber(get(upddata, "Qty Already Delivered"))
                    )
                        ? 0
                        : toNumber(get(upddata, "Qty Already Delivered"));
                });
            }
            if (isEqual(trim(name), "21-30")) {
                map(ddata, (upddata) => {
                    twentyOneToThirty += isNaN(
                        toNumber(get(upddata, "Order Qty"))
                    )
                        ? 0
                        : toNumber(get(upddata, "Order Qty"));
                    achievedTwentyOneToThirty += isNaN(
                        toNumber(get(upddata, "Qty Already Delivered"))
                    )
                        ? 0
                        : toNumber(get(upddata, "Qty Already Delivered"));
                });
            }
        });
        updatedTableData.push(
            {
                oneToTen: oneToTen,
                elevenToTwenty: elevenToTwenty,
                twentyOneToThirty: twentyOneToThirty,
            },
            {
                achievedOneToTen: achievedOneToTen,
                achievedEleventToTwenty: achievedEleventToTwenty,
                achievedTwentyOneToThirty: achievedTwentyOneToThirty,
            }
        );

        setdataSource(updatedTableData);
    }, [sheetData]);

    return (
        <div>
            <Tabs defaultActiveKey="2">
                <TabPane tab="Add Email Users" key="1">
                    <AddEmail />
                </TabPane>
                <TabPane tab="Dashboard" key="2">
                    <Row>
                        <Col md={18} lg={18}>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Please Select Sheet NAme"
                                optionFilterProp="children"
                                onSelect={(e) => {
                                    const sheetNameVariable = {
                                        sheetName: e,
                                    };
                                    dispatch(fetchExcelData(sheetNameVariable));
                                }}
                                filterOption={(input, option) =>
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {map(reducerProps.sheetNames, (data) => (
                                    <Option value={data.properties.title}>
                                        {data.properties.title}
                                    </Option>
                                ))}
                            </Select>
                        </Col>

                        <Col offset={2} md={4} lg={4}>
                            <Button
                                style={{ backgroundColor: "yellow" }}
                                onClick={() => {
                                    //console.log("===>>>", dataSource);
                                    dispatch(sendEmail(dataSource));
                                }}
                            >
                                Send Email
                            </Button>
                        </Col>
                    </Row>

                    <Table
                        scroll={{ x: 1000 }}
                        //loading={loading}
                        columns={columnName()}
                        dataSource={dataSource}
                        bordered
                    />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;
