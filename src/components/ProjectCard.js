import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { Box, makeStyles, createStyles } from "@material-ui/core"
import Avatar from "@material-ui/core/Avatar"
import { Link } from "@material-ui/core"
import { yellow, green, pink, blue } from "@material-ui/core/colors"
import "../styles/project-cards.css"

const useStyles = makeStyles(theme =>
  createStyles({
    avatar: {
      backgroundColor: project => {
        if (project.category == "Web developement") {
          return yellow[700]
        }
        if (project.category == "Machine learning") {
          return green[500]
        }
        if (project.category == "Cloud Computing") {
          return pink[500]
        }
        return blue[500]
      },
    },
    icons: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: "10px",
    },
  })
)

export default function ProjectCard({ project }) {
  const classes = useStyles(project)

  if (!project.category) return <></>

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {project.category[0].toUpperCase()}
            </Avatar>
          }
          title={project.title}
          subheader={project.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {project.description}
          </Typography>
          <br />
          <Box>
            {project.livePreview && (
              <Typography variant="body2" color="textPrimary">
                <Box display="flex" padding="10px">
                  <Avatar
                    src="https://bit.ly/3DHxlIg"
                    alt="Internet symbol"
                    className={classes.icons}
                  />
                  <Link color="inherit" href={project.livePreview}>
                    Live Preview
                  </Link>
                </Box>
              </Typography>
            )}
            {project.github && (
              <Typography variant="body2" color="textPrimary">
                <Box display="flex" padding="10px">
                  <Avatar
                    src="https://bit.ly/3kNSjMX"
                    alt="Github symbol"
                    className={classes.icons}
                  />
                  <Link color="inherit" href={project.github}>
                    Github
                  </Link>
                </Box>
              </Typography>
            )}
            {project.blog &&
              project.blog.map((b, i) => (
                <Typography variant="body2" color="textPrimary">
                  <Box display="flex" padding="10px">
                    <Avatar
                      src="https://bit.ly/2WMSfos"
                      alt="blog symbol"
                      className={classes.icons}
                    />
                    <Link color="inherit" href={b.url}>
                      {b.name}
                    </Link>
                  </Box>
                </Typography>
              ))}
            {project.youtube && (
              <Typography variant="body2" color="textPrimary">
                <Box display="flex" padding="10px">
                  <Avatar
                    src="https://bit.ly/3BtdL0m"
                    alt="youtube symbol"
                    className={classes.icons}
                  />
                  <Link color="inherit" href={project.youtube}>
                    Youtube
                  </Link>
                </Box>
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}
