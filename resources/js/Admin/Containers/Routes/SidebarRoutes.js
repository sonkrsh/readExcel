import { CarOutlined,BoldOutlined } from "@ant-design/icons";

const SidebarRoutes = 
   [
    {
        title: 'Make,Model,Fuel',
        icon: <CarOutlined/>,
        url: '/Dashboard/Make-Model-Fuel'
      },
      {
         title: "Battery",
         icon:<BoldOutlined />,
         submenu:true ,
         data:
         {
            title: 'Add',
            url: '/Dashboard/Battery',
         }
      },
      
      
   ]


export default SidebarRoutes
