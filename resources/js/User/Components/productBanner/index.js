import React from "react";
import { Image } from "antd";

function index() {
    return (
        <div
            className="productBanner"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
            <svg width="100vw" height="60vh" xmlns="http://www.w3.org/2000/svg">
                <image
                    style={{ width: "100%" }}
                    href="http://cognifygroup.in/tech/wp-content/uploads/2018/12/website-development-banner.png"
                />
            </svg>
        </div>
    );
}

export default index;
