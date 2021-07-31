import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const MyButton = styled(Button)`
    background: ${({ buttoncolor }) => (buttoncolor ? buttoncolor : "black")};
    border: 1px solid black;
    color: ${({ color }) => (color ? color : "white")};
    width: 100%;
    height: auto;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    margin-top: ${({ margintop }) => (margintop ? margintop : "0")};
    &:focus {
        background: black;
        color: white;
        border: 1px solid black;
    }
    &:hover {
        background: white;
        color: black;
        border: 1px solid black;
    }

    &:active {
        background: black;
        border: 1px solid black;
    }
`;

function StyledButton({
    text,
    buttonColor,
    color,
    size,
    onClick,
    marginTop,
    disabled,
}) {
    return (
        <MyButton
            buttoncolor={buttonColor}
            margintop={marginTop}
            fontSize={size}
            color={color}
            onClick={() => (onClick ? onClick() : null)}
            htmlType="submit"
            disabled={disabled}
        >
            {text}
        </MyButton>
    );
}

export default StyledButton;
