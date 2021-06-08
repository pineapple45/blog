import React from "react"
import icon from "../images/icon.svg"
import { Typography, Grid, Box } from "@material-ui/core"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Box display="flex" alignItems="center">
          <img src={icon} width="50px" style={{ marginRight: "20px" }} />
          <Typography variant="h4" component="h4">
            ShadedVoxels
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
          <Typography variant="h6" component="h6">
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" component="h6">
            <Link to="/about">About</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default NavBar
