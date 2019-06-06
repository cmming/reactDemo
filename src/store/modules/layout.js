
const TOGGLE_MENU = '切换菜单状态'
const SHOW_LOADING = '显示加载动画'
const HIDE_LOADING = '隐藏加载动画'


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
            return {...state,...action.payload}
        case HIDE_LOADING:
            return {...state,...action.payload}
        default:
            return {...state}
    }
}


export function TOGGLE_MENU_ACTION() {
    return {type:TOGGLE_MENU}
}
export function SHOW_LOADING_ACTION(loading) {
    return {type:SHOW_LOADING,payload: { loading:loading }}
}
export function HIDE_LOADING_ACTION(loading) {
    return {type:HIDE_LOADING,payload: { loading:loading }}
}
