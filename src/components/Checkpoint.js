import React from "react"
import { Box } from "@material-ui/core"
import Flag from "../images/flag.svg"
import GithubIcon from "../images/GitHub-Mark/GitHub-Mark/PNG/Github-Mark-32px.png"
const Checkpoint = ({ checkpoint, repoLink }) => {
  return (
    <Box
      style={{
        border: "2px solid #DF5E5E",
        borderRadius: " 5px",
        padding: "5px",
        fontWeight: "bold",
        marginBottom: "10px",
      }}
    >
      <Box display="flex" justifyContent="start" alignItems="center">
        <img
          src={Flag}
          alt="Flag icon"
          width="20px"
          color="secondary"
          style={{
            display: "inline-block",
            paddingRight: "5px",
            color: "pink",
          }}
        />
        <span>Checkpoint</span>
      </Box>
      <hr />
      <Box display="flex" alignItems="center">
        {`${checkpoint}:   `}
        <a href={repoLink}>{/* <img src={GithubIcon} /> */} code</a>
      </Box>
    </Box>
  )
}

export default Checkpoint
