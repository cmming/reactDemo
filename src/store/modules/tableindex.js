import requestMap from '../../api/requestMap'
import { tableindexModel } from '../../models/index'
const GET_TABLEINDEX_LIST = 'GET_TABLEINDEX_LIST'
const SET_TABLEINDEX_BTN = 'SET_TABLEINDEX_BTN'
const DELETE_TABLE_INDEX="DELETE_TABLE_INDEX"


const initState = tableindexModel


// reducer
export function tableindex(state = initState, action) {
    switch (action.type) {
        //不要直接去改 state 会导致state 修改了但是不会触发 页面的重新渲染
        case GET_TABLEINDEX_LIST:
            return {...state ,table:{dataSource:action.payload.dataSource,columns: state.table.columns,index:tableindexModel.index,commonAction:state.table.commonAction,state:state.table.state}}
        case DELETE_TABLE_INDEX:
            return {...state ,table:{dataSource:action.payload.dataSource,columns: state.table.columns,index:tableindexModel.index,commonAction:state.table.commonAction,state:state.table.state}}
        case SET_TABLEINDEX_BTN:
            return {...state,table:{dataSource:[],columns: [...tableindexModel.table.columns,action.payload.columns],index:tableindexModel.index,commonAction:state.table.commonAction,state:state.table.state}}
        default:
            return {...state }
    }
}

function TABLEINDEX_LIST(data) {
    return { type: GET_TABLEINDEX_LIST, payload: { dataSource: data } }
}



export function index(dataSource) {
    return dispatch => {
        requestMap('GET_TABLE_INDEX_LIST')
            .then(res => {
                dispatch(TABLEINDEX_LIST(res.data))
            })

    }
}

export function initBtn(columnData) {
    return { type: SET_TABLEINDEX_BTN, payload: { columns: columnData } }
}
export function initData(data) {
    return { type: GET_TABLEINDEX_LIST, payload: { dataSource: data } }
}

export function destory(id) {
    return dispatch => {
        requestMap('DELETE_TABLE_INDEX_LIST', {id: id})
            .then(res => {
                    console.log(res)
                    dispatch(TABLEINDEX_LIST(res.data))
                }
            )
    }
}