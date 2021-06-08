import React from "react"
import { Grid, makeStyles, createStyles } from "@material-ui/core"
import NavBar from "./NavBar"
import Footer from "./Footer"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "20px 0",
    },
  })
)

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={8}>
          <NavBar />
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
        <Grid item xs={8}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout
