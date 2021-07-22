import MakeModelFuel from "../Make-Model-Fuel";
import Battery from "../Battery";
import AllocateBattery from "../AllocateBattery";
import AddImages from "../AddImages";
/* import Dashboard from '../Dashboard' */
const DashboardRoutes = [
   /*  {
        path: "/Dashboard",
        component: Dashboard,
    }, */
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
];
export default DashboardRoutes;