import IconButton from "@material-ui/core/IconButton";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleNodeCount } from "react-sortable-tree";
import SortableTree, {
  toggleExpandedForAll
} from "react-sortable-tree/dist/index.cjs.js";
import { setSelectedNode } from "../redux/actions";

export const Tree = () => {
  const [tree, setTree] = useState([
    {
      title: "Cammy Rubertis",
      subtitle: "crubertis0",
      children: [
        {
          title: "Theo Fusedale",
          subtitle: "tfusedale1",
          children: [
            { title: "Rani Hasselby", subtitle: "rhasselby2" },
            { title: "Raddie Jaques", subtitle: "rjaques3" },
            { title: "Jasmine Sarra", subtitle: "jsarra4" },
          ],
        },
        {
          title: "Kyla Warters",
          subtitle: "kwarters5",
          children: [
            { title: "Dniren Hegge", subtitle: "dhegge6" },
            { title: "Cathrine Cove", subtitle: "ccove7" },
          ],
        },
      ],
    },
  ]);

  const [treeHeight, setTreeHeight] = useState(100);

  const selectedNode = useSelector((state) => state.selectedNode);
  const treeExpand = useSelector((state) => state.treeExpand);
  const dispatch = useDispatch();

  useEffect(() => {
    const newTree = toggleExpandedForAll({
      treeData: tree,
      expanded: treeExpand,
    });

    const totalNodes = getVisibleNodeCount({ treeData: newTree });

    setTree(newTree);
    setTreeHeight(totalNodes * 62);
  }, [treeExpand]);

  const handleNodeClick = ({ node, path }) => {
    dispatch(setSelectedNode(node));
  };

  const getNodeKey = ({ node = {} }) => {
    return (node.title || "").replace(/\W/g, "");
  };

  const isSelectedNode = (selectedNode, node) => {
    if (!(selectedNode && node)) {
      return false;
    }

    return getNodeKey({ node: selectedNode }) === getNodeKey({ node });
  };

  const generateNodeProps = ({ node, path }) => {
    return {
      className: isSelectedNode(selectedNode, node) ? "selected-node" : "",
      buttons: [
        <IconButton
          variant="contained"
          size="small"
          onClick={() => handleNodeClick({ node, path })}
          color={isSelectedNode(selectedNode, node) ? "primary" : "default"}
        >
          <PlayArrowRoundedIcon />
        </IconButton>,
      ],
    };
  };

  const onVisibilityToggle = ({ treeData, node, expanded, path }) => {
    const noOfVisibleNodes = getVisibleNodeCount({ treeData: tree });
    const noOfChildNodes = node && node.children && node.children.length;
    const count =
      noOfVisibleNodes + (expanded ? noOfChildNodes : -noOfChildNodes);
    setTreeHeight(count * 62);
  };

  return (
    <div style={{ height: `${treeHeight}px` }}>
      <SortableTree
        treeData={tree}
        onChange={(data) => setTree(data)}
        getNodeKey={getNodeKey}
        generateNodeProps={generateNodeProps}
        onVisibilityToggle={onVisibilityToggle}
        canDrag={true}
      />
    </div>
  );
};
