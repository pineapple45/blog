import React from "react"
import { Link } from "gatsby"
import { Box, Grid, Typography } from "@material-ui/core"
import zigZag from "../images/zigZag.svg"

const Page404 = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="5vh auto"
    >
      <img
        src={zigZag}
        width="50px"
        style={{
          position: "fixed",
          width: "25rem",
          minWidth: "25rem",
          zIndex: 50,
          top: "2%",
        }}
      />
      <Grid
        container
        justify="center"
        spacing={3}
        style={{ zIndex: 100, position: "fixed", top: "15%" }}
      >
        <Grid item xs={10} md={10}>
          <img
            src={`https://robohash.org/${Math.random()}`}
            style={{ display: "block", margin: "auto" }}
          ></img>
        </Grid>
        <Grid item xs={10} md={10} style={{ textAlign: "center" }}>
          <Typography variant="h2" component="h2">
            404
          </Typography>
          <Typography
            variant="subtitle1"
            component="subtitle1"
            style={{ fontSize: "15px" }}
          >
            Page not found :(
          </Typography>
          <Typography variant="h6" component="h6">
            <Link to="/posts">Go to home</Link>
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            component="subtitle1"
            style={{ fontSize: "15px" }}
          >
            Robo Images generated using{" "}
            <Link to="https://robohash.org/">https://robohash.org/</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Page404
