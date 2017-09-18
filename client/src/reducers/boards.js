import { boardActions } from "../actions";

const defaultState = {
  list: [],
  current: {}
};

const boards = (state = defaultState, action) => {
  switch (action.type) {
    case boardActions.SET_CURRENT:
      return { ...state, current: action.data };
    case boardActions.SET:
      return { ...state, list: action.data };
    case boardActions.CLEAR:
      return { ...defaultState };
    case boardActions.ADD:
      return { ...state, list: [...state.list].concat(action.data) };
    case boardActions.REMOVE:
      return {
        ...state,
        list: state.list.filter(board => board.slug !== action.data)
      };
    default:
      return state;
  }
};

export default boards;
