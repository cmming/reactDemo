// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { demo } from './modules/demo'
import { layout } from './modules/layout'
export default combineReducers({demo,layout})