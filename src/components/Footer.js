import React from "react"
import { Box, Typography } from "@material-ui/core"
import { Icon, InlineIcon } from "@iconify/react"
import discordIcon from "@iconify-icons/bi/discord"
import slackSquareFilled from "@iconify-icons/ant-design/slack-square-filled"
import githubFill from "@iconify-icons/akar-icons/github-fill"

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="50px"
      flexDirection="column"
    >
      <Box>
        <Icon
          icon={githubFill}
          height="30px"
          width="30px"
          style={{ padding: "0 5px" }}
        />
        <Icon
          icon={discordIcon}
          height="30px"
          width="30px"
          style={{ padding: "0 5px" }}
        />
        {/* <Icon
          icon={slackSquareFilled}
          height="30px"
          width="30px"
          style={{ padding: "0 5px" }}
        /> */}
      </Box>
      <br />
      <Typography variant="subtitle1" component="p">
        &copy; Copyright ShadedVoxels 2021
      </Typography>
    </Box>
  )
}

export default Footer
