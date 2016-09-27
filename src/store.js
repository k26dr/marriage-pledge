import { createStore } from 'redux'

function reducer(state = [], action) {
    switch (action.type) {
    default:
        return state
    }
}

let store = createStore(reducer)

export default store
