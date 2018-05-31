// import { KALI } from '../actions/actions'
// import { TAMBAH } from '../actions/actions'
// import { KURANG } from '../actions/actions'

// #9 USING REDUX => Create default state
export const initialState = {
    count: 2
};

// #7 USING REDUX => Create a function called reducer, with state and action as arguments
// #10 USING REDUX => put initialState(default state) equal to the state in reducer

export default (state = initialState, action) => {
    switch(action.type) {
        case "KALI":
        return {
            count: state.count * 2
        };
        case "TAMBAH":
        return {
            count: state.count + 2
        };
        case "KURANG":
        return {
            count: state.count - 2
        };
        default:
        return state;
    }
}