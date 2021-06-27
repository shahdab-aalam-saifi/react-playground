import { SET_SELECTED_NODE, TOGGLE_TREE_EXPAND } from "./types";

export const setSelectedNode = (node) => ({
  type: SET_SELECTED_NODE,
  node,
});

export const toggleTreeExpand = () => ({ type: TOGGLE_TREE_EXPAND });
