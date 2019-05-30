
const TOGGLE_MENU = '切换菜单状态'


const initState = {
    collapsed:false
}



// reducer
export function layout(state = initState,action){
    switch (action.type) {
        //不要直接去改 state 会导致state 修改了但是不会触发 页面的重新渲染
        case TOGGLE_MENU:
            return {...state,...{collapsed:!state.collapsed}}
        default:
            return {...state}
    }
}


export function TOGGLE_MENU_ACTION() {
    return {type:TOGGLE_MENU}
}
