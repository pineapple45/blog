import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "@material-ui/core/Container"
import Masonry from "react-masonry-css"
import ProjectCard from "../components/ProjectCard"
import Seo from "../components/Seo"

const Projects = ({ data }) => {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <Layout>
      <Seo
        title="My projects"
        description="List of all projects created by owner of the website"
      />
      <Container>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.allMdx.edges.map(edge => (
            <div key={edge.node.id}>
              <ProjectCard project={edge.node.frontmatter} />
            </div>
          ))}
        </Masonry>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AllProjectsQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            description
            livePreview
            github
            blog {
              name
              url
            }
            youtube
            featureImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  }
`

export default Projects
