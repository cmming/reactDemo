
function changeTableindexTypeFilter(data){
    var stateArr = {
        "-1": "未知状态",
        "0": "已改变",
        "1": "未改变",
    };
    data.map(val=>{
        val['type'] = stateArr[val['type']] ? stateArr[val['type']] : i18n.t("backstage.adminUser.filter.black.-1")
    })

    return stateArr[state] ? stateArr[state] : i18n.t("backstage.adminUser.filter.black.-1")
}

export default function dataFilter(data, filterName) {
    switch (filterName) {
        case 'changeTableindexType':
            return changeTableindexTypeFilter(data)
    }
}