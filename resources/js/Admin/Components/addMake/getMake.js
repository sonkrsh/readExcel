import React from "react";
import { Table } from "antd";

function getMake({ makeData }) {
    const columns = [
        {
            title: "Id.",
            dataIndex: "id",
            key: "id",
            render: (value, key, time) => <p>{time}</p>,
            /*   render: text => <a>{text}</a>, */
        },
        {
            title: "Make.",
            dataIndex: "name",
            key: "name",
            /*  responsive: ['md'], */
        },
        {
            title: "Creation Data",
            dataIndex: "created_at",
            key: "created_at",
            /*  responsive: ['lg'], */
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (value, key, time) => <p>{time}</p>,
            /* responsive: ['lg'], */
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
