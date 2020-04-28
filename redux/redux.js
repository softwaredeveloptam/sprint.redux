const { createStore } = require('redux');

//put all our set up shit here
const initialState = {projects: []}; 

const reducer = (state = initialState, action) => {
    switch((action.type, action.payload)){
        //cases
        case 'POST':
            return {...state, projects: [...state.projects, state.payload]};
        case 'PUT':
            return state;
        case 'PATCH':
            return state;
        case 'DELETE':
            return state;
        case "GET":
            return state;
        default:
            return state;
    }
}

/*
const store = allTheStuffAbove
redux = store = ^^^^^
*/

const store = createStore(reducer);

//store subscribe




module.exports = store;