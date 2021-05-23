import { createMuiTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF5C00",
    },
    secondary: {
      main: "#FFF8F5",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
})

export default theme
