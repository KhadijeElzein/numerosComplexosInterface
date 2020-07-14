import {actions} from '../actions';

const initialState = {
 resultado: '',
};

function reducer(state = initialState, action) {
    switch (action.type) {
    case actions.ADICIONAR_NUMERO_SUCCEEDED:
      return {
        ...state,
        resultado: action.payload
      };
    case actions.MULTIPLICAR_NUMERO_SUCCEEDED:
        return {
          ...state,
          resultado: action.payload
        };
    default:
      return state;
  }
};

export default reducer;