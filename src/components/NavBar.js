import React from "react"
import icon from "../images/icon.svg"
import { Typography, Grid, Box, makeStyles } from "@material-ui/core"
import { Link, navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  siteTitle: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  navItems: {
    fontSize: "20px",
    paddingInline: "8px",
  },
}))

const NavBar = () => {
  const classes = useStyles()

  return (
    <Box marginBottom="30px">
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.siteTitle}
            onClick={() => {
              navigate("/")
            }}
          >
            <img src={icon} width="50px" style={{ marginRight: "20px" }} />
            <Typography variant="h5" component="h5">
              ShadedVoxels
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" component="p" className={classes.navItems}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="p" className={classes.navItems}>
              <Link to="/projects">My-Projects</Link>
            </Typography>
            <Typography variant="h6" component="p" className={classes.navItems}>
              <Link to="/about">About</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default NavBar
