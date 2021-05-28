import React, { useState } from "react";
import { Table, Popconfirm, Typography, Button } from "antd";

function getMake({ makeData }) {
    const [editKey, seteditKey] = useState(null);
    const handleEdit = (id) => {
        seteditKey(id);
    };
    const renderEdit = (id) => {
        return editKey ? (
            <span>
                <a
                    /* onClick={() => save(record.key)} */ style={{
                        marginRight: 8,
                    }}
                >
                    Save
                </a>
                <Popconfirm title="Sure to cancel?" onConfirm={()=>seteditKey(null)}>
                    <a>Cancel</a>
                </Popconfirm>
            </span>
        ) : (
            <Typography.Link /* disabled={editingKey !== ''} */ onClick={() => handleEdit(id)}
            >
                Edit
            </Typography.Link>
        );
    };
    const columns = [
        {
            title: "Id.",
            dataIndex: "id",
            key: "id",
            render: (value, key, id) => <p>{id}</p>,
        },
        {
            title: "Make.",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Creation Data",
            dataIndex: "created_at",
            key: "created_at",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (value, key, time) => {
                return  renderEdit(value)
            },
        },
    ];

    return (
        <div>
            <Table
                pagination={{ pageSize: 5 }}
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={makeData}
            />
        </div>
    );
}

export default getMake;
