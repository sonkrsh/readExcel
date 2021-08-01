import {
    CarOutlined,
    BoldOutlined,
    CameraOutlined,
    CheckOutlined,
    UserOutlined,
} from "@ant-design/icons";

const SidebarRoutes = [
    /*  {
        title: "DashBoard",
        icon: <DashboardOutlined />,
        url: "/Dashboard",
    }, */

    {
        title: "Add Admin",
        icon: <UserOutlined />,
        url: "/Dashboard/add-admin",
    },
    {
        title: "AddImages",
        icon: <CameraOutlined />,
        url: "/Dashboard/addImages",
    },
    {
        title: "Make,Model,Fuel",
        icon: <CarOutlined />,
        url: "/Dashboard/Make-Model-Fuel",
    },
    {
        title: "Battery",
        icon: <BoldOutlined />,
        url: "/Dashboard/Battery",
    },

    {
        title: "Battery Glasses",
        icon: <CarOutlined />,
        url: "/Dashboard/battery-glasses",
    },
    {
        title: "Allocate to Make Model Fuel",
        icon: <CheckOutlined />,
        submenu: true,
        data: [
            {
                title: "Allocate Battery",
                url: "/Dashboard/allocate-battery",
            },
            {
                title: "Allocate glasss",
                url: "/Dashboard/allocate-glass",
            },
        ],
    },
];

export default SidebarRoutes;
