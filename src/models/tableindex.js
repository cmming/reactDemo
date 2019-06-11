// import React from 'react';


export default {
    index:'tableIndex',
    table: {
        columns: [
            {
                titleKey: 'Date',
                dataIndex: 'date',
            },
            {
                titleKey: 'Amount',
                dataIndex: 'amount',
            },
            {
                titleKey: 'Type',
                dataIndex: 'type',
                filter:"changeTableIndexType"
            },
            {
                titleKey: 'Note',
                dataIndex: 'note',
            },
        ],
        commonAction:{
            titleKey: 'Action',
            key: 'action',
            deleteAction:{show:true,titleKey: 'Delete',},
            editAction:{show:true,titleKey: 'Edit',},
        },
        dataSource: [
        ],
        state:{
            bordered: true,
            size: 'default',
            hasRowSelection: true,
          },
        searchData:{
            page:1,
            page_size:10
        }
    }
}
