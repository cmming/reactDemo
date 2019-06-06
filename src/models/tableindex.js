// import React from 'react';
export default {
    table: {
        columns: [
            {
                title: 'Date',
                dataIndex: 'date',
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
            },
            {
                title: 'Type',
                dataIndex: 'type',
            },
            {
                title: 'Note',
                dataIndex: 'note',
            },
            //在父组件中去自定义
            // {
            //     title: 'Action',
            //     key: 'action',
            //     render: () => <a href = "javascript:;" > Delete </a>,
            // },
        ],
        hasHandleColumns:false,
        dataSource: [
            // {
            //     key: 0,
            //     date: '2018-02-11',
            //     amount: 120,
            //     type: 'income',
            //     note: 'transfer',
            // },
            // {
            //     key: 1,
            //     date: '2018-03-11',
            //     amount: 243,
            //     type: 'income',
            //     note: 'transfer',
            // },
            // {
            //     key: 2,
            //     date: '2018-04-11',
            //     amount: 98,
            //     type: 'income',
            //     note: 'transfer',
            // },
        ]
    }
}
