import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#000000"
    },
    custom: {
      facebookBlue: "#3b5998"
    },
    red: {
      main: "F60712"
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: 50
      }
    }
  }
});