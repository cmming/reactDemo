import {createStore} from 'redux'

function counter(state,action){
    switch (action.type) {
        case "+":
            return state+=1
        case "-":
            return state-=1
        default:
            return 10;
    }
}

//创建 store
const store = createStore(counter)

const init = store.getState()

console.log(init)

function listener() {
    const current = store.getState()
    console.log(`state=${current}`)
}

//派发事件
store.subscribe(listener)

store.dispatch({type:"+"})
store.dispatch({type:"+"})
store.dispatch({type:"-"})