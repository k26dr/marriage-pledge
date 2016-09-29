import { combineReducers, createStore } from 'redux'
import { routerReducer } from 'react-router-redux'

function landingReducer(state = [], action) {
    switch (action.type) {
    case 'TOGGLE_HOVER_MARRIAGE_PLEDGE':
        return {...state, marriagePledgeHover: action.hover}
    default:
        return state
    }
}

const reducers = combineReducers({
    landing: landingReducer,
    routing: routerReducer
})

let store = createStore(reducers, {
    landing: {
        marriagePledgeHover: false
    }
}, window.devToolsExtension && window.devToolsExtension())

export default store
