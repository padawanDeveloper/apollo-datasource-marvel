import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { PropTypes } from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Navigation from "../../layouts/components/navigation/NavigationLayout";

const styles = theme => ({
  main: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minHeight: "100%",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      marginTop: 64
    }
  }
});

const PublicRoute = ({
  classes,
  component,
  content,
  exact,
  name,
  path,
  title
}) => {
  if (Meteor.userId()) return <Redirect to="/" />;
  return (
    <Route
      exact={exact}
      path={path}
      render={props => (
        <Fragment>
          <Helmet>
            <title>{`${Meteor.settings.public.appName} | ${title}`}</title>
            <meta name={name} content={content} />
          </Helmet>
          <Navigation />
          <main className={classes.main}>{React.createElement(component)}</main>
        </Fragment>
      )}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default withStyles(styles)(PublicRoute);