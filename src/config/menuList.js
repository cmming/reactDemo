const menuList = [
    {
        "key": "/admin/dashborad",
        "title": "首页",
        "icon": "dashboard",
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
]

export default menuList