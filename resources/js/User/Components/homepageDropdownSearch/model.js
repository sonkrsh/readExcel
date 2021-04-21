import React, { useEffect } from "react";
import { Card, Select } from "antd";

function model({ onClick, selectValue, modelArray }) {
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
            listHeight={180}
                dropdownStyle={{ display: "block" }}
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
                {modelArray.map((value, key) => (
                    <Option key={key} value={value.id}>
                        {value.name}
                    </Option>
                ))}
            </Select>
        </Card>
    );
}

export default model;
