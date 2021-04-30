import createDataContext from './createDataContext';

const pictureReducer = (state, action) => {
    switch (action.type) {
        case 'setPicture': return { ...state, picture: action.payload };
        case 'setPersonToBeat': return { ...state, personToBeat: action.payload };
        case 'setPos': return { ...state, pos: action.payload };
        default: return state;
    }
};

const setPicture = dispatch => (val) => {
    dispatch({type: 'setPicture', payload: val});
};

const setPersonToBeat = dispatch => (val) => {
    dispatch({type: 'setPersonToBeat', payload: val});
};

const setPos = dispatch => (val) => {
    dispatch({type: 'setPos', payload: val});
};

export const { Provider, Context } = createDataContext(
    pictureReducer,
    { setPicture, setPersonToBeat, setPos },
    { picture: '1',
      personToBeat: '',
      pos: {x: 0, y:0} 
    }
);