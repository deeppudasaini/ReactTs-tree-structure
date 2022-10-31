import { ADD_NODE_OR_LEAF_REQUEST } from "../constants/constants";

const INITIAL_STATE = {
  payload: [],

  formValues: {},
  errors: {},
};
const reducerOne = (state, action) => {
  state = state || INITIAL_STATE;
  switch (action.type) {
    case ADD_NODE_OR_LEAF_REQUEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
