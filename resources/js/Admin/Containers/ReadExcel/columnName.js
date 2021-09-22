import React from 'react'

const columnName = () => {
    return  [
        {
          title: 'Product Category',
          dataIndex: 'Product_Category',
          key: 'Product_Category',
        },
        {
          title: 'MTD Procured',
          dataIndex: 'MTD_Procured',
          key: 'MTD_Procured',
        },
        {
          title: 'MTD Delivered',
          dataIndex: 'MTD_Delivered',
          key: 'MTD_Delivered',
        },
        {
          title: 'MTD Delivered Percentage',
          dataIndex: 'MTD_Delivered_Percentage',
          key: 'MTD_Delivered_Percentage',
        },
        {
          title: 'MTD Pending',
          dataIndex: 'MTD_Pending',
          key: 'MTD_Pending',
        },
        {
          title: 'MTD Pending Percentage',
          dataIndex: 'MTD_Pending_Percentage',
          key: 'MTD_Pending_Percentage',
        },
        {
          title: 'Inventory',
          dataIndex: 'Inventory',
          key: 'Inventory',
        },
        {
          title: 'InventoryPercent',
          dataIndex: 'Inventory_Percent',
          key: 'Inventory_Percent',
        },
        {
          title: 'New Request',
          dataIndex: 'New_Request',
          key: 'New_Request',
        },
      ];
}

export default columnName
