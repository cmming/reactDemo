
import storage from '../../utils/storage'

const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE'


const initState = {
    language:storage.get('react-language')?storage.get('react-language'):'zh'
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


export function TOGGLE_LANGUAGE_ACTION(language) {
    return {type:TOGGLE_LANGUAGE, payload: { language:language }}
}
