import { createStore } from 'redux'

function reducer(state = [], action) {
    switch (action.type) {
    case 'TOGGLE_HOVER_MARRIAGE_PLEDGE':
        let newState = {...state}
        newState.landing.marriagePledgeHover = action.hover
        return newState
    default:
        return state
    }
}

let store = createStore(reducer, {
    landing: {
        marriagePledgeHover: false
    }
}, window.devToolsExtension && window.devToolsExtension())

export default store
