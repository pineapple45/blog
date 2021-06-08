import { createMuiTheme } from "@material-ui/core"
import { indigo, pink } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    // fontFamily: "Merriweather, serif",
    // h1: "Montserrat, sans-serif",
    // h2: "Montserrat, sans-serif",
    // h3: "Montserrat, sans-serif",
    // h4: "Montserrat, sans-serif",
    // h5: "Montserrat, sans-serif",
    // h6: "Montserrat, sans-serif",
  },
})

export default theme
