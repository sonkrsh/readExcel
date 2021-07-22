import React, { useEffect } from "react";
import { Card, Select } from "antd";
import { BackwardOutlined, CloseOutlined } from "@ant-design/icons";

function make({ onClick, selectValue, makeArray }) {
    const { Option } = Select;

    return (
        <Card
            extra={
                <div className="header">
                    <div className="back">
                        <a onClick={() => onClick(0)}>
                            <BackwardOutlined />
                        </a>
                    </div>
                    <div className="title">
                        <h6>Make (Manufacture)</h6>
                    </div>
                    <div className="cancel">
                        <a onClick={() => onClick(0)}>
                            <CloseOutlined />
                        </a>
                    </div>
                </div>
            }
            bordered={false}
            style={{ textAlign: "center" }}
        >
            <Select
                autoFocus
                listHeight={180}
                dropdownStyle={{ display: "block" }}
                onChange={(id, name) => {
                    onClick(3);
                    selectValue(id, name?.children);
                }}
                showSearch
                placeholder="Please Select Make"
                optionFilterProp="children"
                defaultOpen={true}
                style={{ width: "100%" }}
                filterOption={(input, option) =>
                    option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                }
            >
                {makeArray.map((value, key) => (
                    <Option key={key} value={value?.id}>
                        {value?.name}
                    </Option>
                ))}
            </Select>
        </Card>
    );
}

export default make;
