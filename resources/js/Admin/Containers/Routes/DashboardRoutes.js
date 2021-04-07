
import MakeModelFuel from '../Make-Model-Fuel'
import Battery from '../Battery'
import AllocateBattery from '../AllocateBattery'
const DashboardRoutes = [
    {
        path:'/Dashboard/Make-Model-Fuel',
        component: MakeModelFuel
    },
    {
      path:'/Dashboard/Battery',
      component: Battery
    },
    {
      path:'/Dashboard/allocate-battery',
      component: AllocateBattery
    }
    
]
export default DashboardRoutes
