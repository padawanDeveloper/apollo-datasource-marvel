import React, { Component } from "react";
import { PropTypes } from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

import PrivateToolbar from "../../../components/navigation/toolbar/Pivate";
import PublicToolbar from "../../../components/navigation/toolbar/Public";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  logo: {
    color: theme.palette.common.white,
    textDecoration: "none"
  }
});

class NavigationLayout extends Component {
  state = {
    open: false
  };

  toggleDrawer = () => {
    this.setState(prevState => {
      const { open } = prevState;
      this.props.handleToggleDrawer(!open);
      return { open: !open };
    });
  };

  render() {
    const { classes } = this.props;
    let { open } = this.state;
    return (
      <nav>
        <AppBar position="fixed" color="secondary" className={classes.appBar}>
          {Meteor.userId() ? (
            <PrivateToolbar open={open} onToggleDrawer={this.toggleDrawer} />
          ) : (
            <PublicToolbar />
          )}
        </AppBar>
      </nav>
    );
  }
}

NavigationLayout.propTypes = {
  handleToggleDrawer: PropTypes.func
};

export default withStyles(styles)(NavigationLayout);