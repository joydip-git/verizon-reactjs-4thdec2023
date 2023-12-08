const { legacy_createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')

const initialCountState = {
    count: 0
}
const initialNameState = {
    name: ''
}

const actions = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
    UPDATE_NAME: 'UPDATE_NAME'
}

const increaseActionCreator = (data) => {
    return {
        type: actions.INCREASE,
        payload: data
    }
}
const decreaseActionCreator = (data) => {
    return {
        type: actions.DECREASE,
        payload: data
    }
}
const updateNameActionCreator = (data) => {
    return {
        type: actions.UPDATE_NAME,
        payload: data
    }
}

function countReducer(state = initialCountState, action) {
    switch (action.type) {
        case actions.INCREASE:
            return {
                count: state.count + action.payload
            }
            break;

        case actions.DECREASE:
            return {
                count: state.count - action.payload
            }
            break;


        default:
            return { ...state }
            break;
    }
}

function nameReducer(state = initialNameState, action) {
    switch (action.type) {
        case actions.UPDATE_NAME:
            return {
                name: action.payload
            }
            break;

        default:
            return { ...state }
            break;
    }
}

const loggerMiddleware = createLogger()
const reducerMap = combineReducers({
    countState: countReducer,
    nameState: nameReducer
})
const store = legacy_createStore(
    reducerMap,
    applyMiddleware(loggerMiddleware)
)


//console.log(store.getState())
//store.dispatch({ type: actionTypes.INCREASE, payload: 2 })
store.dispatch(increaseActionCreator(2))
//console.log(store.getState())
//store.dispatch({ type: actionTypes.DECREASE, payload: 1 })
store.dispatch(decreaseActionCreator(1))
//console.log(store.getState())
//store.dispatch({ type: actionTypes.UPDATE_NAME, payload: 'joydip' })
store.dispatch(updateNameActionCreator('joydip'))
//console.log(store.getState())