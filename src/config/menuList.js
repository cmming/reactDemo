const menuList = [
    {
        "key": "/admin/dashborad",
        "title": "Dashborad",
        "icon": "dashboard",
        "childrens": [
            {
                "key": "/admin/dashborad/analysis",
                "title": "分析页",
            },
            {
                "key": "/admin/dashborad/monitor",
                "title": "监控台",
            },
            {
                "key": "/admin/dashborad/workplace",
                "title": "工作台",
            }
        ]
    },
    {
        "key": "/admin/",
        "title": "系统设置",
        "iconComponent":true,
        "icon": "setting",
        "childrens": [
            {
                "key": "/admin/about",
                "title": "关于",
                "icon": "question",
            },
            {
                "key": "/admin/users",
                "title": "用户",
                "icon": "user",
            }
        ]
    },
    {
        "key": "/admin/form",
        "title": "表单",
        "iconComponent":true,
        "icon": "setting",
        "childrens": [
            {
                "key": "/admin/form/basic-form",
                "title": "基础表单",
                "icon": "question",
            },
            {
                "key": "/admin/form/demo",
                "title": "表单Demo",
                "icon": "question",
            },
        ]
    },
    {
        "key": "/admin/table",
        "title": "table",
        "iconComponent":true,
        "icon": "setting",
        "childrens": [
            {
                "key": "/admin/table/index",
                "title": "基础table",
                "icon": "question",
            },
        ]
    },
    {
        "key": "/admin/redux",
        "title": "redux",
        "iconComponent":true,
        "icon": "setting",
        "childrens": [
            {
                "key": "/admin/redux/demo",
                "title": "redux 装饰器",
                "icon": "question",
            },
        ]
    },
]

export default menuList