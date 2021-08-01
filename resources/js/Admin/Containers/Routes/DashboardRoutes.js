import MakeModelFuel from "../Make-Model-Fuel";
import Battery from "../Battery";
import AllocateBattery from "../AllocateBattery";
import AddImages from "../AddImages";
import BatteryGlasses from "../Glasses";
import AllocateGlass from "../AllocateGlass";
import AddAdmin from "../AddAdmin";
/* import Dashboard from '../Dashboard' */
const DashboardRoutes = [
    /*  {
        path: "/Dashboard",
        component: Dashboard,
    }, */
    {
        path: "/Dashboard/add-admin",
        component: AddAdmin,
    },
    {
        path: "/Dashboard/addImages",
        component: AddImages,
    },
    {
        path: "/Dashboard/Make-Model-Fuel",
        component: MakeModelFuel,
    },
    {
        path: "/Dashboard/Battery",
        component: Battery,
    },
    {
        path: "/Dashboard/allocate-battery",
        component: AllocateBattery,
    },
    {
        path: "/Dashboard/battery-glasses",
        component: BatteryGlasses,
    },
    {
        path: "/Dashboard/allocate-glass",
        component: AllocateGlass,
    },
];
export default DashboardRoutes;
