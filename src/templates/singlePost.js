import React from "react"
import { graphql } from "gatsby"
import { Box, Typography } from "@material-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "../components/Image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Toc from "../components/Toc"

const singlePost = ({ pageContext, data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
  const title = data.mdx.frontmatter.title || data.mdx.frontmatter.slug
  const excerpt = data.mdx.frontmatter.excerpt
  const date = data.mdx.frontmatter.date
  const body = data.mdx.body
  const tableOfContents = data.mdx.tableOfContents

  const seoImage = data.mdx.frontmatter.featureImage.publicURL

  return (
    <Layout>
      <Seo title={title} image={seoImage} description={excerpt} />
      <Typography variant="h5" component="h5">
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
      <br />
      <Toc tableOfContents={tableOfContents} />
      <Typography variant="body1" component="div">
        <MDXRenderer>{body}</MDXRenderer>
      </Typography>
      <br />
      <Typography variant="body1" component="h6">
        If you liked the content and want to contribute, you can buy me a coffee
        😊
      </Typography>
      <br />
      <a href="https://www.buymeacoffee.com/pineapple45" target="_blank">
        <img
          src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
          alt="Buy Me A Coffee"
          style={{
            height: "41px !important",
            width: "174px !important",
            boxShadow: "0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important",
            WebkitBoxShadow:
              " 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important",
          }}
        />
      </a>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      tableOfContents
      headings {
        depth
        value
      }
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          publicURL
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
