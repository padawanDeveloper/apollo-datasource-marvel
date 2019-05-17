import React from "react";
import { Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  logo: {
    textDecoration: "none",
    color: theme.palette.common.white
  }
});

export default withStyles(styles)(({ classes }) => (
  <Toolbar>
    <Typography className={classes.logo} component={Link} to="/" variant="h6">
      {Meteor.settings.public.appName}
    </Typography>
  </Toolbar>
));