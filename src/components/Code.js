import React, { useState } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import "../styles/language-tabs.css"
import { Button, Typography } from "@material-ui/core"

const Code = ({ codeString, language, ...props }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyCodeHandler = codeStr => {
    console.log(codeStr)
    const el = document.createElement("textarea")
    el.value = codeStr
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          {language && <span className="language">{language}</span>}
          <pre className={className} style={style}>
            <Button
              variant="contained"
              // size="small"
              onClick={() => copyCodeHandler(codeString)}
              color="secondary"
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                // textTransform: "lowercase",
                fontFamily: "sans-serif",
                padding: "0px",
                fontSize: "10px",
              }}
            >
              {isCopied ? "copied" : "copy"}
            </Button>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default Code
