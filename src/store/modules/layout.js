
const TOGGLE_MENU = 'TOGGLE_MENU'
const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'


const initState = {
    collapsed:false,
    loading:false
}



// reducer
export function layout(state = initState,action){
    switch (action.type) {
        //不要直接去改 state 会导致state 修改了但是不会触发 页面的重新渲染
        case TOGGLE_MENU:
            return {...state,...{collapsed:!state.collapsed}}
        case SHOW_LOADING:
            return {...state,loading:true,collapsed:state.collapsed}
        case HIDE_LOADING:
            return {...state,loading:false,collapsed:state.collapsed}
        default:
            return {...state}
    }
}


export function TOGGLE_MENU_ACTION() {
    return {type:TOGGLE_MENU}
}
export function SHOW_LOADING_ACTION() {
    return {type:SHOW_LOADING}
}
export function HIDE_LOADING_ACTION() {
    return {type:HIDE_LOADING}
}
