import React from "react";
import { Table } from "antd";

function getMake({ locationData }) {

    const columns = [
        {
            title: "Id.",
            dataIndex: "id",
            key: "id",
            render: (value, key, time) => <p>{time}</p>,
            /*   render: text => <a>{text}</a>, */
        },
        {
            title: "Location.",
            dataIndex: "location",
            key: "location",
            /*  responsive: ['md'], */
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
                dataSource={locationData}
            />
        </div>
    );
}

export default getMake;
