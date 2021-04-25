import React, { useEffect, useState } from "react";
import { Layout, Menu, Icon } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./style.css";
import { Link, Route, Switch } from "react-router-dom";

function index(props) {
    const { sidebarRoutes, dashboardRoutes } = props;
    const { Header, Sider, Content } = Layout;
    const { SubMenu } = Menu;

    const [windowSize, setwindowSize] = useState(null);
    const [collapsed, setcollapsed] = useState(false);
    var w = window.outerWidth;

    const toggle = () => {

        if (w >= 768) {
            
        }
        else{
            setwindowSize(0);
            setcollapsed(!collapsed);
        }
        //
    };
    useEffect(() => {
       
        if (w <= 768) {
            setcollapsed(true);
            setwindowSize(0);
        } else {
            setcollapsed(false);
            setwindowSize(60);
        }
    }, [w]);

    const updateWidthAndHeight = () => {;
        if (w <= 768) {
            setcollapsed(true);
            setwindowSize(0);
        } else {
            setcollapsed(false);
            setwindowSize(60);
        }
    };

    window.addEventListener("resize", updateWidthAndHeight);

    return (
        <div>
            {collapsed ? (
                <PlusOutlined
                    className="trigger"
                    shape="circle"
                    icon="user"
                    size={"small"}
                    style={{ marginLeft: "10px" }}
                    type={collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={toggle}
                />
            ) : (
                <MinusOutlined
                    className="trigger"
                    shape="circle"
                    icon="user"
                    size={"small"}
                    style={{ marginLeft: "10px" }}
                    type={collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={toggle}
                />
            )}

            <Layout>
                <Layout>
                    <Sider
                        className="sidebar"
                        collapsedWidth={windowSize}
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                        >
                            {sidebarRoutes.map((value, key) => {
                                if (value.submenu) {
                                    return (
                                        <SubMenu
                                            key={key}
                                            icon={value.icon}
                                            title={value.title}
                                        >
                                            {value.data.map((value, key) => (
                                                <Menu.Item onClick={toggle} key={key}>
                                                    <span>
                                                        {value.title}
                                                    </span>
                                                    <Link to={value.url} />
                                                </Menu.Item>
                                            ))}
                                        </SubMenu>
                                    );
                                }
                                return (
                                    <Menu.Item onClick={toggle} key={key}>
                                        {value.icon}
                                        <span>{value.title}</span>
                                        <Link to={value.url} />
                                    </Menu.Item>
                                );
                            })}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header
                            style={{ background: "#fff", padding: 0 }}
                        ></Header>
                        <Content
                            style={{
                                margin: "24px 16px",
                                padding: 24,
                                background: "#fff",
                                minHeight: "100vh",
                            }}
                        >
                            <Switch>
                                {dashboardRoutes.map((value, key) => (
                                    <Route
                                        key={key}
                                        path={value.path}
                                        component={value.component}
                                    />
                                ))}
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}

export default index;
