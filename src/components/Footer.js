import React from "react"
import { Box, Link, Typography } from "@material-ui/core"
import { Icon, InlineIcon } from "@iconify/react"
import discordIcon from "@iconify-icons/bi/discord"
import twitterIcon from "@iconify-icons/bi/twitter"
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
        <Link href="https://github.com/pineapple45">
          <Icon
            icon={githubFill}
            height="30px"
            width="30px"
            style={{ padding: "0 5px" }}
          />
        </Link>

        <Link href="https://discord.gg/cDyttEtkcJ">
          <Icon
            icon={discordIcon}
            height="30px"
            width="30px"
            style={{ padding: "0 5px" }}
          />
        </Link>
        <Link href="https://twitter.com/Anmol_gomra">
          <Icon
            icon={twitterIcon}
            height="30px"
            width="30px"
            style={{ padding: "0 5px" }}
          />{" "}
        </Link>
      </Box>
      <br />
      <Typography variant="subtitle1" component="p">
        &copy; Copyright ShadedVoxels 2021
      </Typography>
    </Box>
  )
}

export default Footer
