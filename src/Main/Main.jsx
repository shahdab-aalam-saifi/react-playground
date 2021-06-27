import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Edit from "../Edit";
import { toggleTreeExpand } from "../redux/actions";
import Tree from "../Tree";
import Validator from "../Validator";

export const Main = () => {
  const treeExpand = useSelector((state) => state.treeExpand);
  const dispatch = useDispatch();

  const toggleChecked = () => {
    dispatch(toggleTreeExpand());
  };

  return (
    <Container>
      <Grid container spacing={1} style={{ paddingTop: "20px" }}>
        <Grid item sm={12} md={6} lg={6}>
          <Card>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleChecked}
              >
                {treeExpand ? "Collapse" : "Expand"}
              </Button>
            </CardActions>
            <CardContent>
              <Tree />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Card>
            <CardContent>
              <Edit />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <Validator />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
