import React from "react"
import { ThemeProvider } from "@material-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import theme from "./src/themes/theme"
import Code from "./src/components/Code"
import Table from "./src/components/Table"
import Quotes from "./src/components/Quotes"
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
  blockquote: Quotes,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </MDXProvider>
)
