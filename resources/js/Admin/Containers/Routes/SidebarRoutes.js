import { CarOutlined, BoldOutlined,CameraOutlined,DashboardOutlined } from "@ant-design/icons";

const SidebarRoutes = [
    {
        title: "DashBoard",
        icon: <DashboardOutlined />,
        url: "/Dashboard",
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
        submenu: true,
        data: [
            {
                title: "Add",
                url: "/Dashboard/Battery",
            },
            {
                title: "Allocate Battery",
                url: "/Dashboard/allocate-battery",
            },
        ],
    },
];

export default SidebarRoutes;
