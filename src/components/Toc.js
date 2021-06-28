import React from "react"
import { Link } from "gatsby"
import {
  Typography,
  makeStyles,
  createStyles,
  Box,
  Paper,
  List,
  ListItem,
} from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      [theme.breakpoints.down("sm")]: {
        // listStyle: "none",
      },
      //   [theme.breakpoints.up("md")]: {
      //     position: "fixed",
      //     right: "10rem",
      //     top: "30vh",
      //     listStyle: "none",
      //   },
      [theme.breakpoints.up("lg")]: {
        position: "fixed",
        right: "10rem",
        top: "30vh",
        // listStyle: "none",
      },
    },
    list: {
      // listStyle: "none",
      marginLeft: 0,
      maxHeight: "300px",
      overflowY: "auto",
    },
    listItem: {
      padding: 0,
    },
    link: {
      color: "inherit",
    },
    tocHeading: {
      fontWeight: "bold",
      fontStyle: "inherit",
    },
  })
)

export default ({ tableOfContents }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography className={classes.tocHeading} variant="h6">
        Table of contents
      </Typography>
      <hr />
      <ol className={classes.list}>
        {tableOfContents.items.map((content, index) => (
          <li className={classes.listItems} key={index} disableGutters>
            <Typography component="h4" style={{ padding: 0 }}>
              <Link className={classes.link} to={content.url}>
                {content.title}
              </Link>
            </Typography>
          </li>
        ))}
      </ol>
    </Box>
  )
}
