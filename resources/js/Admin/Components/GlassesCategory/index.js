import React from "react";
import { Col, Row, Form, Input, Divider, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const index = ({ onSubmit }) => {
    const [form] = Form.useForm();
    const formData = new FormData();

    const onFinish = (value) => {
        formData.append("glass_category_name", value.glass_category_name);
        formData.append("fields", JSON.stringify(value.glass_features));
        onSubmit(formData);
        form.resetFields();
    };
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                name="basic"
                onFinish={onFinish}
            >
                <Row>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Form.Item
                            label="Add Glass Category"
                            name="glass_category_name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input !",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Form.Item
                            label="Add Glass Image"
                            name="glass_image_url"
                        >
                            {/*  <AddImages
                                onSubmit={(event) => {
                                    formData.append(
                                        "glass_image_url",
                                        event.get("file")
                                    );
                                }}
                            /> */}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Form.Item>
                            <Form.List
                                label="Add Battery Model Description"
                                name="glass_features"
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
                                                            "descption",
                                                        ]}
                                                        label={
                                                            `Description${" "}` +
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
                                                            Remove Above Field
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
                                                    <PlusOutlined /> Add field
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    );
                                }}
                            </Form.List>
                        </Form.Item>
                    </Col>
                </Row>

                <Button
                    type="primary"
                    shape="round"
                    htmlType="submit"
                    icon={<PlusOutlined />}
                    //size={size}
                >
                    Add Glass Category
                </Button>
            </Form>
        </div>
    );
};

export default index;
