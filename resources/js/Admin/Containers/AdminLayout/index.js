import React from 'react'
import AdminLayout from '../../Components/adminLayout';
import SidebarRoutes from '../Routes/SidebarRoutes';
import DashboardRoutes from '../Routes/DashboardRoutes'

function index() {
    return (
        <div>
           <AdminLayout sidebarRoutes={SidebarRoutes} dashboardRoutes={DashboardRoutes}/> 
        </div>
    )
}

export default index
