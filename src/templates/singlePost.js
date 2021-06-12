import React from "react"
import { graphql } from "gatsby"
import { Box, Typography } from "@material-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "../components/Image"
import Layout from "../components/Layout"

const singlePost = ({ pageContext, data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
  const title = data.mdx.frontmatter.title || data.mdx.frontmatter.slug
  const excerpt = data.mdx.frontmatter.excerpt
  const date = data.mdx.frontmatter.date
  const body = data.mdx.body

  return (
    <Layout>
      <Typography variant="h6" component="h6">
        {title}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {excerpt}
      </Typography>
      <Typography
        variant="subtitle2"
        component="h6"
        style={{ textAlign: "right" }}
      >
        Posted on: {date}
      </Typography>
      <br />
      <Image fluid={featureImage} />
      <Typography variant="body1" component="div">
        <MDXRenderer>{body}</MDXRenderer>
      </Typography>
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default singlePost
