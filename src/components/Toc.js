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
        listStyle: "none",
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
        listStyle: "none",
      },
    },
    list: {
      listStyle: "none",
      marginLeft: 0,
      height: "200px",
      maxHeight: "200px",
      overflowY: "auto",
    },
    listItem: {
      padding: 0,
    },
    link: {
      color: "inherit",
    },
  })
)

export default ({ tableOfContents }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant="h6">Table of content</Typography>
      <hr />
      <List className={classes.list}>
        {tableOfContents.items.map((content, index) => (
          <ListItem className={classes.listItems} key={index} disableGutters>
            <Typography component="h4" style={{ padding: 0 }}>
              <Link className={classes.link} to={content.url}>
                {content.title}
              </Link>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
