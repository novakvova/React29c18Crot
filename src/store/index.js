import { createStore } from 'redux';

const initialState = {
    countRedux: 23
};

const reducer = (state = initialState, action) => {
    console.log('-----reducer runnig-------');
    switch(action.type)
    {
        case 'INCREMENT': {
            return Object.assign({}, state, {countRedux: state.countRedux + 1});
            //return {
            //    countRedux: state.countRedux + 1
            //  };
        }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;