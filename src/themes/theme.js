import { createMuiTheme } from "@material-ui/core"
import { indigo, pink } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
  typography: {
    fontFamily: "merriweather",
    h1: "montserrat",
    h2: "montserrat",
    h3: "montserrat",
    h4: "montserrat",
    h5: "montserrat",
    h6: "montserrat",
  },
})

export default theme
