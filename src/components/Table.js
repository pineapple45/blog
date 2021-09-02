import React from "react"
import { Table as MuiTable, TableContainer, Paper } from "@material-ui/core"
import "../styles/table.css"

const Table = ({ children }) => {
  return (
    <TableContainer component={Paper} style={{ padding: "5px" }}>
      <MuiTable aria-label="simple table" style={{ minWidth: "650px" }}>
        {children}
      </MuiTable>
    </TableContainer>
  )
}

export default Table
