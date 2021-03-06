import { createReducer } from 'redux-create-reducer';
import * as actionTypes from '@constants/ActionTypes';

const initialState = {
  list: []
};

const room = {
  [actionTypes.ADD_RENDER_ITEM](state, { payload }) {
    const list = [...state.list, payload.path];
    return {...state, list};
  },
  [actionTypes.DELETE_RENDER_ITEM](state, { payload }) {
    const list = state.list.filter((path) => path.id !== payload.id);
    return {...state, list};
  },
};



export default createReducer(initialState, room);