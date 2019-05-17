import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";

import Spinner from "../../../components/utils/Spinner";

const styles = theme => ({
  rootContainer: {
    flex: 1,
    border: "1px solid black"
  },
  gridList: {
    overflow: "scroll"
  },
  gridListTile: {
    padding: theme.spacing.unit / 4
  },
  marketName: {
    color: theme.palette.custom.accent
  },
  paper: {}
});

const GET_SERIES = gql`
  query series {
    series {
        title
    }
  }
`;

export default withWidth()(
  withStyles(styles)(({ classes, width }) => (
    <Query query={GET_SERIES} pollInterval={60000}>
      {({ loading, error, data }) => {
          console.log(error)
        if (error) return `Error: ${error}`;
        if (loading) return <Spinner />;
        return (
          <GridList
            cellHeight={100}
            classes={{ root: classes.gridList }}
            cols={5}
            spacing={16}
          >
            <h1>Grid SERIES</h1>
            {/* {markets.map(market => (
              <GridListTile
                key={Random.id(5)}
                cols={isWidthUp("sm", width) ? 1 : 2.5}
                classes={{ root: classes.gridListTile }}
              >
                <Grid
                  container
                  component={Paper}
                  elevation={1}
                  classes={{ container: classes.paper }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      align="center"
                      classes={{ root: classes.marketName }}
                    >
                      {market.id}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="default"
                      align="center"
                    >
                      Spread
                    </Typography>
                    <Typography variant="h4" color="primary" align="center">
                      {market.ticker.spread}
                    </Typography> 
                  </Grid>
                </Grid>
              </GridListTile>
            ))} */}
          </GridList>
        );
      }}
    </Query>
  ))
);
