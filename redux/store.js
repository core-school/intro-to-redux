import { createStore } from 'redux'

const initialState = {
    vueltas:0
}

const reducer = (state = initialState, action) => {
    console.log(action, state);

    let newState = {};
    switch(action.type){
        case 'INCREMENT':
            newState = {
                ...state, 
                vueltas: state.vueltas + action.howMuchToIncrement
            }
            break;
        default:
            newState = {...state}
    }
    return newState;
    
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )