import React from "react"
import { Box, SvgIcon, Icon } from "@material-ui/core"
import NoteIcon from "../images/note.svg"

const Note = ({ note }) => {
  return (
    <Box
      style={{
        border: "2px solid blue",
        borderRadius: " 5px",
        padding: "5px",
        fontWeight: "bold",
        marginBottom: "10px",
      }}
    >
      <Box display="flex" justifyContent="start" alignItems="center">
        <img
          src={NoteIcon}
          alt="Note icon"
          width="20px"
          color="secondary"
          style={{
            display: "inline-block",
            paddingRight: "5px",
            color: "pink",
          }}
        />
        <span>Note</span>
      </Box>
      <hr />
      <div>{note}</div>
    </Box>
  )
}

export default Note
