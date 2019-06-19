import requestMap from '../../api/requestMap'
import { tableindexModel } from '../../models/index'
const GET_TABLEINDEX_LIST = 'GET_TABLEINDEX_LIST'
const SET_TABLEINDEX_BTN = 'SET_TABLEINDEX_BTN'
const DELETE_TABLE_INDEX="DELETE_TABLE_INDEX"
const STORE_TABLE_INDEX="STORE_TABLE_INDEX"

const SET_TABLE_INDEX_SEARCHDATA="SET_TABLE_INDEX_SEARCHDATA"


const initState = tableindexModel


// reducer
export function tableindex(state = initState, action) {
    switch (action.type) {
        //不要直接去改 state 会导致state 修改了但是不会触发 页面的重新渲染
        case GET_TABLEINDEX_LIST:
            return {...state ,table:{dataSource:action.payload.dataSource,columns: state.table.columns,modelIndex:tableindexModel.modelIndex,commonAction:state.table.commonAction,state:state.table.state,searchData:state.table.searchData}}
        case STORE_TABLE_INDEX:
            return {...state}
        case DELETE_TABLE_INDEX:
            return {...state ,table:{dataSource:action.payload.dataSource,columns: state.table.columns,modelIndex:tableindexModel.modelIndex,commonAction:state.table.commonAction,state:state.table.state},searchData:state.table.searchData}
        case SET_TABLEINDEX_BTN:
            return {...state,table:{dataSource:[],columns: [...tableindexModel.table.columns,action.payload.columns],modelIndex:tableindexModel.modelIndex,commonAction:state.table.commonAction,state:state.table.state,searchData:state.table.searchData}}
        case SET_TABLE_INDEX_SEARCHDATA:
            return {...state,table:{dataSource:state.table.dataSource,columns: state.table.columns,modelIndex:tableindexModel.modelIndex,commonAction:state.table.commonAction,state:state.table.state,searchData:action.payload.searchData}}
        default:
            return {...state }
    }
}

function TABLEINDEX_LIST(data) {
    return { type: GET_TABLEINDEX_LIST, payload: { dataSource: data } }
}
function STORE_TABLE_INDEX_ACTION(data) {
    return { type: STORE_TABLE_INDEX }
}

export function setSearchData(data) {
    return { type: SET_TABLE_INDEX_SEARCHDATA, payload: { searchData: data } }
}



export function index(searchData) {
    return dispatch => {
        requestMap('GET_TABLE_INDEX_LIST',searchData)
            .then(res => {
                dispatch(TABLEINDEX_LIST(res.data))
            })

    }
}
export function store(searchData) {
    return dispatch => {
        requestMap('STORE_TABLE_INDEX',searchData)
            .then(res => {
                dispatch(STORE_TABLE_INDEX_ACTION())
            })

    }
}

export function initBtn(columnData) {
    return { type: SET_TABLEINDEX_BTN, payload: { columns: columnData } }
}
export function initData(data) {
    return { type: GET_TABLEINDEX_LIST, payload: { dataSource: data } }
}

export function destory(id,data) {
    return dispatch => {
        requestMap('DELETE_TABLE_INDEX_LIST', {resource_id: id,...data})
            .then(res => {
                    dispatch(TABLEINDEX_LIST(res.data))
                }
            )
    }
}