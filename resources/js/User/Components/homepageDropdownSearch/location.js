import React from "react";
import { Card, Select } from "antd";

function location({ onClick, selectValue, locationArray }) {
    const { Option } = Select;
    return (
        <Card
            extra={
                <div className="header">
                    <div className="back">
                        <a onClick={() => onClick(0)}>Back</a>
                    </div>
                    <div className="title">
                        <h6>Location</h6>
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
                dropdownStyle={{ display: "block" }}
                showSearch
                onChange={(id, name) => {
                    onClick(0);
                    selectValue(id, name?.children);
                }}
                placeholder="Please Select location"
                optionFilterProp="children"
                defaultOpen={true}
                style={{ width: "100%" }}
                filterOption={(input, option) =>
                    option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                }
            >
                {locationArray.map((value, key) => (
                    <Option key={key} value={value.id}>
                        {value.location}
                    </Option>
                ))}
            </Select>
        </Card>
    );
}

export default location;
