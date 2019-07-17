// import React from 'react';


export default {
    modelIndex: 'baseTable',
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
            deleteAction: {show: true, titleKey: 'Delete',},
            editAction: {show: true, titleKey: 'Edit',},
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
            email: "",
            radio: "",
            checkbox: [],
            select: "",
            datePicker: "",
            transfer: []
        },
        item: [
            {label_key: "email", props: "email", type: "Input", placeholder: true},
            {
                label_key: "radio",
                props: "radio",
                type: "Radio",
                options: [{value: "a", label: "item 1"}, {value: "b", label: "item 2"}, {value: "c", label: "item 3"}]
            },
            {
                label_key: "checkbox",
                props: "checkbox",
                type: "Checkbox",
                options: [{value: "A", label: "A"}, {value: "B", label: "B"}, {value: "C", label: "C"}]
            },
            {
                label_key: "select",
                props: "select",
                type: "Select",
                options: [{value: "A1", label: "A1"}, {value: "B1", label: "B1"}, {value: "C1", label: "C1"}]
            },
            // { label_key: "DatePicker", props: "datePicker", type: "DatePicker", showTime: true, format: "YYYY-MM-DD HH:mm:ss" },
            {label_key: "datePicker", props: "datePicker", type: "DatePicker"},
            {
                label_key: "transfer",
                props: "transfer",
                type: "Transfer",
                options: [{key: "A1", label: "A1", chosen: false}, {key: "A2", label: "A2", chosen: true}]
            },
        ],
        rules: {
            email: [{
                type: 'email',
                message_key: 'email',
            },
                {
                    required: true,
                    message_key: "required",
                }
            ]
        }
    },
    searchArea: {
        model: {
            email: "",
            radio: "",
            checkbox: [],
            select: "",
            datePicker: "",
            page: 1,
            page_size: 10
        },
        item: [
            {label_key: "email", props: "email", type: "Input", placeholder: true},
            {
                label_key: "radio",
                props: "radio",
                type: "Radio",
                options: [{value: "a", label: "item 1"}, {value: "b", label: "item 2"}, {value: "c", label: "item 3"}]
            },
            {
                label_key: "checkbox",
                props: "checkbox",
                type: "Checkbox",
                options: [{value: "A", label: "A"}, {value: "B", label: "B"}, {value: "C", label: "C"}]
            },
            {
                label_key: "select",
                props: "select",
                type: "Select",
                options: [{value: "A1", label: "A1"}, {value: "B1", label: "B1"}, {value: "C1", label: "C1"}]
            },
            // { label_key: "DatePicker", props: "datePicker", type: "DatePicker", showTime: true, format: "YYYY-MM-DD HH:mm:ss" },
            {label_key: "datePicker", props: "datePicker", type: "DatePicker"},
        ],
        rules: {
            email: [{
                type: 'email',
                message_key: 'email',
            },]
        }
    }
}