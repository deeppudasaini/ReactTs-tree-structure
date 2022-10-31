import {
  ADD_NODE_OR_LEAF_FAILURE,
  ADD_NODE_OR_LEAF_REQUEST,
  ADD_NODE_OR_LEAF_SUCCESS,
  GET_NODE_FAILURE,
  GET_NODE_REQUEST,
  GET_NODE_SUCCESS,
  SEARCH_NODE_OR_LEAF_FAILURE,
  SEARCH_NODE_OR_LEAF_REQUEST,
  SEARCH_NODE_OR_LEAF_SUCCESS,
} from "../constants/constants";

export const addNodeOrLeafRequest = () => {
  return {
    type: ADD_NODE_OR_LEAF_REQUEST,
  };
};
export const addNodeSuccess = (data) => {
  return {
    type: ADD_NODE_OR_LEAF_SUCCESS,
    data,
  };
};
export const addNodeFailure = (error) => {
  return {
    type: ADD_NODE_OR_LEAF_FAILURE,
    error,
  };
};

export const getNodeRequest = () => {
  return {
    type: GET_NODE_REQUEST,
  };
};

export const getNodeSuccess = (data) => {
  return {
    type: GET_NODE_SUCCESS,
    data,
  };
};
export const getNodeFailure = (error) => {
  return {
    type: GET_NODE_FAILURE,
    error,
  };
};
export const searchRequest = () => {
  return {
    type: SEARCH_NODE_OR_LEAF_REQUEST,
  };
};
export const searchSuccess = (data) => {
  return {
    type: SEARCH_NODE_OR_LEAF_SUCCESS,
    data,
  };
};
export const searchFalure = (error) => {
  return {
    type: SEARCH_NODE_OR_LEAF_FAILURE,
    error,
  };
};
