import Typography from "@material-ui/core/Typography";
import React from "react";
import { useSelector } from "react-redux";

export const Edit = () => {
  const selectedNode = useSelector((state) => state.selectedNode);

  return (
    <>
      <Typography variant="body1">
        {selectedNode && selectedNode.title}
      </Typography>
      <Typography variant="body2">
        {selectedNode && selectedNode.subtitle}
      </Typography>
    </>
  );
};
