import React, { useEffect, useState } from "react";
import { Form, Input, Button, Divider, Select, Row, Col, Upload } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import AddImages from '../addImages'
import "./style.css";

function index({ onload, onsubmit, companyData, batteryModel }) {

    const Option = Select.Option;
    const [form] = Form.useForm();
    const formData = new FormData();

    useEffect(() => {
        onload();
    }, []);

    const onFinish = (value) => {
        onsubmit(value);
        form.resetFields();
    };

    const onFinishmodel = (values) => {
        const batteryCompany = values.batteryCompany;
        const batteryModels = values.batteryModel;
        formData.append("batteryCompany", JSON.stringify(batteryCompany));
        formData.append("batteryModel", batteryModels);
        formData.append("fields", JSON.stringify(values.fields));
        batteryModel(formData);
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Form
                        form={form}
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Add Battery Company"
                            name="battery"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your battery!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Button
                            type="primary"
                            shape="round"
                            htmlType="submit"
                            icon={<PlusOutlined />}
                            //size={size}
                        >
                            Add Battery
                        </Button>
                    </Form>
                </Col>

                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Form
                        //form={form}
                        layout="vertical"
                        name="basic"
                        onFinish={onFinishmodel}
                    >
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    label="Select Battery Company"
                                    name="batteryCompany"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Battery Company!",
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }
                                        placeholder="Select a Make First"
                                    >
                                        {companyData
                                            ? companyData.map((value, key) => (
                                                  <Option
                                                      key={key}
                                                      value={value.id}
                                                  >
                                                      {value.name}
                                                  </Option>
                                              ))
                                            : null}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Add Battery Model"
                                    name="batteryModel"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Battery Model!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                       <AddImages onSubmit={(event)=>{ formData.append("file", event.get('file'))}}/>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    ></Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.List
                                    label="Add Battery Model Description"
                                    name="fields"
                                >
                                    {(fields, { add, remove }) => {
                                        return (
                                            <div>
                                                {fields.map((field, index) => (
                                                    <div
                                                        className="desc_box"
                                                        key={field.key}
                                                    >
                                                        <Form.Item
                                                            className="desc_input"
                                                            name={[
                                                                index,
                                                                "desc",
                                                            ]}
                                                            label={
                                                                "Description" +
                                                                index
                                                            }
                                                        >
                                                            <Input placeholder="field name" />
                                                        </Form.Item>

                                                        {fields.length > 1 ? (
                                                            <Button
                                                                type="danger"
                                                                className="dynamic-delete-button"
                                                                onClick={() =>
                                                                    remove(
                                                                        field.name
                                                                    )
                                                                }
                                                                icon={
                                                                    <MinusCircleOutlined />
                                                                }
                                                            >
                                                                Remove Above
                                                                Field
                                                            </Button>
                                                        ) : null}
                                                    </div>
                                                ))}
                                                <Divider />
                                                <Form.Item>
                                                    <Button
                                                        type="dashed"
                                                        onClick={() => add()}
                                                        style={{
                                                            width: "60%",
                                                        }}
                                                    >
                                                        <PlusOutlined /> Add
                                                        field
                                                    </Button>
                                                </Form.Item>
                                            </div>
                                        );
                                    }}
                                </Form.List>
                                <Form.Item></Form.Item>
                            </Col>
                        </Row>
                        <Button
                            type="primary"
                            shape="round"
                            htmlType="submit"
                            icon={<PlusOutlined />}
                            //size={size}
                        >
                            Add Battery
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default index;
