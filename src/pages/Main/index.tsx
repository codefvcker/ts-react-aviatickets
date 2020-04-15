import React, { useEffect } from "react";
import { FilterContainer, TicketContainer } from "../../containers";
import { useStyles } from "../../styles";

import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core";

export const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FilterContainer />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <TicketContainer />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
