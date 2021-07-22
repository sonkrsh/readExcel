import React from "react";

function StyledImage({ url }) {
    return (
        <svg width="100%" height="100%">
            <image href={url} x="0" y="0" height="100%" width="100%" />
        </svg>
    );
}

export default StyledImage;
