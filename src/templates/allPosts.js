import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Card, CardContent, Typography } from "@material-ui/core"
import { Pagination, PaginationItem } from "@material-ui/lab"
import Layout from "../components/Layout"

const AllPosts = ({ pageContext, data }) => {
  const edges = data.allMdx.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      {edges.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        const excerpt = node.frontmatter.excerpt
        const featureImage = node.frontmatter.featureImage
        return (
          <Box key={node.frontmatter.slug} padding="10px">
            <Card>
              <CardContent>
                <Typography variant="h5" component="h5">
                  {title}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        )
      })}
      <hr />
      <div>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
        <br />
        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`/${i === 0 ? "" : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const allPostsQuery = graphql`
  query allPostsQuery($limit: Int!, $skip: Int!) {
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
          }
        }
      }
    }
  }
`

export default AllPosts
