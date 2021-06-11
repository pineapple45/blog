import React from "react"
import Layout from "../components/Layout"
import { Grid, Typography, Box, Paper, Link } from "@material-ui/core"
import { Icon, InlineIcon } from "@iconify/react"
import discordIcon from "@iconify-icons/bi/discord"
import slackSquareFilled from "@iconify-icons/ant-design/slack-square-filled"
import githubFill from "@iconify-icons/akar-icons/github-fill"

const about = () => {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: "10px" }}>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
              eros a sapien condimentum tempor sed id urna. Morbi in facilisis
              enim. Nunc aliquam vestibulum urna ac mattis. Sed dapibus feugiat
              purus sit amet laoreet. Mauris id lobortis nisl. Aenean convallis
              iaculis orci. Nam volutpat lorem eros, sed facilisis dui gravida
              quis. Morbi facilisis molestie luctus. Proin urna dolor, porta ac
              massa ac, aliquam elementum metus.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: "10px" }}>
            <Typography variant="h6" component="h6">
              Meet the community
            </Typography>
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
                  height="35px"
                  width="35px"
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
                  height="35px"
                  width="35px"
                  style={{ padding: "5px 10px 0 0" }}
                />
                <Link href="https://discord.com/shadedvoxels">
                  https://discord.com/shadedvoxels
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default about
