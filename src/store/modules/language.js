
import storage from '../../utils/storage'

const TOGGLE_LANGUAGE = '切换语言'


const initState = {
    language:'zh-cn'
}


// reducer
export function language(state = initState,action){
    switch (action.type) {
        //不要直接去改 state 会导致state 修改了但是不会触发 页面的重新渲染
        case TOGGLE_LANGUAGE:
            //将语言缓存到浏览器缓存中
            storage.set('react-language',action.payload.language)
            return {...state,...action.payload}
        default:
            return {...state}
    }
}


export function TOGGLE_LANGUAGE_ACTION() {
    return {type:TOGGLE_LANGUAGE}
}
