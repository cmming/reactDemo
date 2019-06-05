// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { demo } from './modules/demo'
import { layout } from './modules/layout'
import { language } from './modules/language'
export default combineReducers({demo,layout,language})