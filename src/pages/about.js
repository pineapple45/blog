import React from "react"
import Layout from "../components/Layout"
import {
  Grid,
  Typography,
  Box,
  Avatar,
  Link,
  makeStyles,
  createStyles,
  Divider,
} from "@material-ui/core"
import { Icon } from "@iconify/react"
import discordIcon from "@iconify-icons/bi/discord"
import twitterIcon from "@iconify-icons/bi/twitter"
import githubFill from "@iconify-icons/akar-icons/github-fill"
import Seo from "../components/Seo"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "20px 0",
    },
    profileAvatar: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
  })
)

const About = () => {
  const styles = useStyles()

  return (
    <Layout>
      <Seo title="About" description="Site owner information" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box marginBottom="50px">
              <Avatar
                alt="Profile pic"
                src="https://avatars.githubusercontent.com/u/50433033?s=200&v=4"
                className={styles.profileAvatar}
              />
            </Box>
            <Typography variant="body1" component="p">
              Hey, glad to see you here! My name is Anmol. I am a student at IIT
              Indore , India currently pursuing computer science engineering.
              Feel free to checkout a few of my blogs written on various topics
              related to web developement. I usually write these whenever I get
              free time. Along with web developement, I also have interest in
              Machine Learning and Deep Learning and will create a few posts on
              them in near future. Other than all of this , I am on Discord and
              if you want to connect with me and learn new web technologies or
              in general have a few discussions regarding my blog etc, do join
              my discord channel (shadedvoxels) whose link is given below! :))
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box style={{ padding: "10px" }}>
            <Typography variant="h6" component="h6">
              Social Links
            </Typography>

            <Divider />
            <br />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography
                variant="body1"
                component="p"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  icon={githubFill}
                  height="25px"
                  width="25px"
                  style={{ padding: "5px 10px 0 0" }}
                />
                <Link href="https://github.com/pineapple45">
                  https://github.com/pineapple45
                </Link>
              </Typography>

              <Typography
                variant="body1"
                component="p"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  icon={discordIcon}
                  height="25px"
                  width="25px"
                  style={{ padding: "5px 10px 0 0" }}
                />
                <Link href="https://discord.gg/cDyttEtkcJ">
                  https://discord.com/ShadedVoxels
                </Link>
              </Typography>

              <Typography
                variant="body1"
                component="p"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  icon={twitterIcon}
                  height="25px"
                  width="25px"
                  style={{ padding: "5px 10px 0 0" }}
                />
                <Link href="https://twitter.com/Anmol_gomra">
                  https://twitter.com/Anmol_gomra
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
