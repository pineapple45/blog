import { createMuiTheme } from "@material-ui/core"
import { indigo, pink } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
  typography: {
    fontFamily: "Merriweather, serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
    },
    h6: {
      fontFamily: "Merriweather, serif",
      fontStyle: "italic",
      fontWeight: "bold",
    },
    subtitle1: {
      fontFamily: "Merriweather, serif",
    },
  },
})

export default theme
