import React from "react";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 220;

const styles = theme => ({
  drawerOpen: {
    paddingLeft: drawerWidth
  },
  hide: {
    display: "none"
  },
  logo: {
    textDecoration: "none",
    color: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing.unit * 3
    }
  },
  menuIcon: {
    color: theme.palette.secondary.main
  },
  toolbarButtonsContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  }
});

const Private = ({ classes, open, onToggleDrawer }) => {
  return (
    <Toolbar disableGutters className={classNames(open && classes.drawerOpen)}>
      <Hidden lgUp>
        <IconButton
          style={{ marginLeft: 8 }}
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleDrawer}
          className={classNames(open && classes.hide)}
        >
          <Menu classes={{ root: classes.menuIcon }} />
        </IconButton>
      </Hidden>
      <Typography
        classes={{ colorSecondary: classes.logo }}
        component={Link}
        color="secondary"
        to="/"
        variant="title"
      >
        {Meteor.settings.public.appName}
      </Typography>
    </Toolbar>
  );
};

Private.propTypes = {
  onToggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool
};

export default withStyles(styles)(withRouter(Private));