import { createStore } from 'redux'

const initState = {
    name: 'initVal'
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "CHANGE_DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return { ...state }
    }
}

export function createClientStore() {
    return createStore(reducer,REDUX_STORE)
}

export function createServerStore() {
    return createStore(reducer)
}
