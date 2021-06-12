import React, { useState, useEffect } from "react"
import { graphql, Link, navigate } from "gatsby"

import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Box,
} from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import Image from "../components/Image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const allPosts = ({ pageContext, data }) => {
  const edges = data.allMdx.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const viewPost = slug => {
    navigate(`/posts/${slug}`)
  }

  const paginate = (event, n) => {
    navigate(`/posts/${n - 1 === 0 ? "" : n}`)
  }

  return (
    <Layout>
      <Seo />
      {edges.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        const excerpt = node.frontmatter.excerpt
        const featureImage = node.frontmatter.featureImage.childImageSharp.fluid
        const date = node.frontmatter.date
        return (
          <Card key={node.frontmatter.slug} style={{ marginBottom: "20px" }}>
            <Grid container style={{ padding: "10px" }}>
              <Grid item xs={12}>
                <Typography variant="h6" component="h6">
                  {title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="p"
                  style={{ textAlign: "right" }}
                >
                  Posted on: {date}
                </Typography>
                <br />
              </Grid>
              <Grid item xs={12} md={3}>
                <CardMedia>
                  <Image fluid={featureImage} />
                </CardMedia>
              </Grid>
              <Grid item xs={12} md={9}>
                <CardContent>
                  <Typography variant="subtitle1" component="p">
                    {excerpt}
                  </Typography>
                  <br />
                  <Button
                    onClick={() => viewPost(node.frontmatter.slug)}
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    View
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        )
      })}
      <br />
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        {!isFirst && (
          <Link to={prevPage} rel="prev" style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="h6">
              ← Previous Page
            </Typography>
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next" style={{ textDecoration: "none" }}>
            <Typography variant="h6" component="h6">
              Next Page →
            </Typography>
          </Link>
        )}
        <br />
        {/* {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`/${i === 0 ? "" : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
        <br /> */}
        <Pagination
          variant="outlined"
          shape="rounded"
          count={numPages}
          page={currentPage}
          onChange={paginate}
        />
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($limit: Int!, $skip: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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
    }
  }
`

export default allPosts
