import React, { useEffect, useState } from "react";
import { fetchExcelData, fetchSheetName, sendEmail } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Table, Row, Col, Select } from "antd";
import get from "lodash/get";
import trim from "lodash/trim";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import isNaN from "lodash/isNaN";
import remove from "lodash/remove";
import toNumber from "lodash/toNumber";
import columnName from "./columnName";

function index() {
    const dispatch = useDispatch();
    const { Option } = Select;
    const [sheetName, setsheetName] = useState(null);
    const [sheetData, setsheetData] = useState(null);
    const [sheetUpdateData, setsheetUpdateData] = useState([]);
    const [onLoadCall, setonLoadCall] = useState(false);
    const reducerProps = useSelector((state) => state.ReadExcel);
    const [dataSource, setdataSource] = useState([]);
    var updatedArray = [];

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
                requirement += isNaN(
                    toNumber(get(data, "Total Qty. to be Procured"))
                )
                    ? 0
                    : toNumber(get(data, "Total Qty. to be Procured"));
                orderPlaced += isNaN(toNumber(get(data, "Order Qty")))
                    ? 0
                    : toNumber(get(data, "Order Qty"));
                dilivered += isNaN(toNumber(get(data, "Qty Already Delivered")))
                    ? 0
                    : toNumber(get(data, "Qty Already Delivered"));
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
        setdataSource(updatedTableData);
    }, [sheetData]);

    return (
        <div>
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
        </div>
    );
}

export default index;
