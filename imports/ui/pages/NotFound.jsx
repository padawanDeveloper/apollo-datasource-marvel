import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  subheading: {
    color: theme.palette.grey[400]
  },
  exclamation: {
    color: theme.palette.primary.light,
    marginBottom: theme.spacing.unit * 2
  },
  superTitle: {
    color: theme.palette.primary.dark
  }
});

const NotFoundPage = ({ classes, history, width }) => (
  <Grid
    container
    style={{ height: "100%", padding: 24 }}
    justify="center"
    alignItems="center"
    direction="column"
  >
    <i
      className={classNames(
        "fas fa-exclamation-triangle fa-10x",
        classes.exclamation
      )}
    />
    <Typography variant="h2" style={{ color: 'red' }}>
      Whooops!
    </Typography>
    <Typography
      variant={isWidthUp("md", width) ? "h5" : "subtitle1"}
      color="default"
      classes={{ root: classes.subheading }}
      align="center"
      paragraph
    >
      The requested route is not available
    </Typography>
    <Button
      variant="contained"
      color="secondary"
      size="large"
      onClick={event => {
        history.goBack();
      }}
    >
      GO BACK!
    </Button>
  </Grid>
);

export default withWidth()(withStyles(styles)(withRouter(NotFoundPage)));