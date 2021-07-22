import React from "react";
import { Table } from "antd";

function getMake({ fuelData }) {

    const columns = [
        {
            title: "Id.",
            dataIndex: "id",
            key: "id",
            render: (value, key, time) => <p>{time}</p>,
            /*   render: text => <a>{text}</a>, */
        },
        {
            title: "Fuel.",
            dataIndex: "name",
            key: "name",
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
                dataSource={fuelData}
            />
        </div>
    );
}

export default getMake;
