import React, { useEffect, useState } from "react";
import { Tabs, Card, Row, Button, Popconfirm, Image, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import BannerImage from "../addImages";
import { isEmpty, isEqual } from "lodash";
import { filterGoogle } from "./filterGoogleId";
import "./style.css";

function homePage({
    imageData,
    loading,
    onSubmit,
    onDelete,
    onEdit,
    editLoading,
}) {
    const [Edit, setEdit] = useState(false);

    const formData = new FormData();
    useEffect(() => {
        setEdit(false);
    }, [imageData]);

    return (
        <div>
            {Edit ? (
                <BannerImage
                    loadingButton={editLoading}
                    label={"Add Image"}
                    buttonSeen={true}
                    type={"logo"}
                    onSubmit={(event) => {
                        const googleId = filterGoogle(imageData);
                        formData.append("googleId", googleId.googleId);
                        formData.append("file", event.get("file"));
                        formData.append("editId", imageData?.id);
                        onEdit(formData);
                    }}
                />
            ) : null}
            {!isEmpty(imageData) ? (
                <Row justify={"space-between"} wrap>
                    <div className="buutons">
                        <Button onClick={() => setEdit(true)} type="dashed">
                            Edit
                        </Button>
                        <Popconfirm
                            title="Are you sure？"
                            onConfirm={() => {
                                const delte = filterGoogle(imageData);
                                onDelete({
                                    ...delte,
                                    imageId: imageData?.id,
                                });
                            }}
                            cancelText="No"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    </div>
                    <div className="logo" className="boxSpace">
                        <Image
                            width={1000}
                            src={imageData?.url}
                            placeholder={
                                <Spin
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    size="large"
                                />
                            }
                        />
                    </div>
                </Row>
            ) : (
                <BannerImage
                    loadingButton={loading}
                    label={"Add HomePage Image"}
                    buttonSeen={true}
                    type={"homePage"}
                    onSubmit={(event) => {
                        onSubmit(event);
                    }}
                />
            )}
        </div>
    );
}

export default homePage;
