import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Image, Spin, Card } from "antd";

export default function index() {
    const logo = useSelector((state) => state?.AddImages?.logoData);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                <Card
                    loading
                    style={{ width: 200, height: 70, overflow: "hidden" }}
                    cover={
                        <img
                            alt="image"
                            src={
                                localStorage.getItem("logo")
                                    ? localStorage.getItem("logo")
                                    : logo?.url
                            }
                        />
                    }
                ></Card>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            About Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
