// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { demo } from './modules/demo'
import { layout } from './modules/layout'
import { language } from './modules/language'
import { tableindex } from './modules/tableindex'
export default combineReducers({demo,layout,language,tableindex})