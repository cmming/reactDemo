import requestMap from '../../api/requestMap'
import { tableindexModel } from '../../models/index'
const GET_TABLEINDEX_LIST = '获取tableindex 列表数据'
const SET_TABLEINDEX_BTN = '未tableindex表格添加数据'


const initState = {
    // tableindex:10
    ...tableindexModel
}


// reducer
export function tableindex(state = initState, action) {
    switch (action.type) {
        //不要直接去改 state 会导致state 修改了但是不会触发 页面的重新渲染
        case GET_TABLEINDEX_LIST:
            console.log(action.payload.dataSource, {})
            // action.payload.dataSource.map(val=>{
            //     state.table.dataSource.push(val)
            // })
            state.table.dataSource = action.payload.dataSource
            console.log(state.table.dataSource.length)
            return {...state }
        case SET_TABLEINDEX_BTN:
            state.table.hasHandleColumns = true
            state.table.columns.push(action.payload.columns)
            return {...state }
        default:
            return {...state }
    }
}

function TABLEINDEX_LIST(data) {
    return { type: GET_TABLEINDEX_LIST, payload: { dataSource: data } }
}


export function GET_TABLEINDEX_LIST_ACTION(dataSource) {
    return dispatch => {
        requestMap('GET_TABLE_INDEX_LIST')
            .then(res => {
                dispatch(TABLEINDEX_LIST(res.data.data))
                console.log(res)
            })

    }
}
export function SET_TABLEINDEX_BTN_ACTION(columnData) {
    return { type: SET_TABLEINDEX_BTN, payload: { columns: columnData } }
}