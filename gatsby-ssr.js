import React from "react"
import { ThemeProvider, Table } from "@material-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import theme from "./src/themes/theme"
import Code from "./src/components/Code"
import "./language-tabs.css"

const components = {
  table: Table,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }

    return <pre {...props} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </MDXProvider>
)
