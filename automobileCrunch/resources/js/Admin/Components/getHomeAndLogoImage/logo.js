import React, { useEffect, useState } from "react";
import { Tabs, Card, Row, Button, Popconfirm, Image, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import BannerImage from "../addImages";
import { isEmpty, isEqual } from "lodash";
import "./style.css";
import { filterGoogle } from "./filterGoogleId";

function logo({ imageData, loading, onSubmit, onDelete, onEdit, editLoading }) {
    const formData = new FormData();
    const [Edit, setEdit] = useState(false);

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
                <div>
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
                    <div className="boxSpace">
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
                </div>
            ) : (
                <BannerImage
                    loadingButton={loading}
                    label={"Add Image"}
                    buttonSeen={true}
                    type={"logo"}
                    onSubmit={(event) => {
                        onSubmit(event);
                    }}
                />
            )}
        </div>
    );
}

export default logo;
