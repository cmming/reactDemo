
const ADD = '加'
const DELETE = '减'


const initState = {
    number:10
}



// reducer
export function demo(state = initState,action){
    switch (action.type) {
        //不要直接去改 state 会导致state 修改了但是不会触发 页面的重新渲染
        case ADD:
            return {...state,...{number:state.number+1}}
        case DELETE:
            return {...state,...{number:state.number-1}}
        default:
            return {...state}
    }
}


export function ADD_NUM() {
    return {type:ADD}
}

export function DELETE_NUM() {
    return {type:DELETE}
}