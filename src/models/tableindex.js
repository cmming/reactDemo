// import React from 'react';


export default {
    index: 'tableIndex',
    table: {
        columns: [{
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
                filter: "changeTableIndexType"
            },
            {
                titleKey: 'Note',
                dataIndex: 'note',
            },
        ],
        commonAction: {
            titleKey: 'Action',
            key: 'action',
            deleteAction: { show: true, titleKey: 'Delete', },
            editAction: { show: true, titleKey: 'Edit', },
        },
        dataSource: [],
        state: {
            bordered: true,
            size: 'default',
            hasRowSelection: true,
        },
        searchData: {
            page: 1,
            page_size: 10
        }
    },
    form: {
        model: {
            email: "294225707@qq.com",
            radio: "",
            checkbox: [],
            select: "",
            datePicker: "",
            transfer: []
        },
        item: [
            { label: "E-mail", props: "email", type: "Input" },
            { label: "Radio", props: "radio", type: "Radio", options: [{ value: "a", label: "item 1" }, { value: "b", label: "item 2" }, { value: "c", label: "item 3" }] },
            { label: "Checkbox", props: "checkbox", type: "Checkbox", options: [{ value: "A", label: "A" }, { value: "B", label: "B" }, { value: "C", label: "C" }] },
            { label: "Select", props: "select", type: "Select", options: [{ value: "A1", label: "A1" }, { value: "B1", label: "B1" }, { value: "C1", label: "C1" }] },
            { label: "DatePicker", props: "datePicker", type: "DatePicker" },
            { label: "Transfer", props: "transfer", type: "Transfer", options: [{ key: "A1", label: "A1", chosen: false },{ key: "A2", label: "A2", chosen: true }] },
        ],
        rules: {
            email: [{
                    type: 'email',
                    message: 'email',
                },
                {
                    required: true,
                    message: "required",
                }
            ]
        }
    }
}