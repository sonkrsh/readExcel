import React, { useEffect } from "react";
import { Card, Select } from "antd";

function model({ onClick, selectValue }) {
    const { Option } = Select;

    return (
        <Card
            extra={
                <div className="header">
                    <div className="back">
                        <a onClick={() => onClick(2)}>Back</a>
                    </div>
                    <div className="title">
                        <h6>Model</h6>
                    </div>
                    <div className="cancel">
                        <a onClick={() => onClick(0)}>Cancel</a>
                    </div>
                </div>
            }
            bordered={false}
            style={{ textAlign: "center" }}
        >
            <Select
                onChange={(id, name) => {
                    onClick(4);
                    selectValue(id, name?.children);
                }}
                showSearch
                placeholder="Please Select model"
                optionFilterProp="children"
                defaultOpen={true}
                style={{ width: "100%" }}
                filterOption={(input, option) =>
                    option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
        </Card>
    );
}

export default model;
