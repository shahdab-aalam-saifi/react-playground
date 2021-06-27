import { SET_SELECTED_NODE, TOGGLE_TREE_EXPAND } from "../actions/types";

const initialState = { selectedNode: {}, treeExpand: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_NODE:
      return { ...state, selectedNode: { ...action.node } };

    case TOGGLE_TREE_EXPAND:
      return { ...state, treeExpand: !state.treeExpand };

    default:
      return state;
  }
};

export default reducer;
