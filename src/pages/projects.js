import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "@material-ui/core/Container"
import Masonry from "react-masonry-css"
import ProjectCard from "../components/ProjectCard"

const projectsData = [
  {
    id: Math.random(),
    category: "web developement",
    title: "Project-1",
    details:
      "Quis pariatur laboris labore ex amet minim fugiat. Cupidatat voluptate culpa duis anim est commodo laboris officia aliqua cupidatat eiusmod eu ad. Velit magna duis proident veniam enim consectetur aliquip mollit enim consectetur est sint id reprehenderit. Commodo elit eu in esse ea ex laboris elit ullamco sunt cupidatat fugiat consequat nostrud. Ipsum voluptate cillum cupidatat nostrud excepteur laboris quis veniam ipsum labore magna incididunt irure Lorem.",
  },
  {
    id: Math.random(),
    category: "Machine learning",
    title: "Project-1",
    details:
      "Officia enim sit nostrud irure id magna. Irure excepteur laboris sunt laborum pariatur id ipsum excepteur dolor. Voluptate Lorem dolore sint incididunt nulla consectetur adipisicing elit in occaecat adipisicing ea.",
  },
  {
    id: Math.random(),
    category: "Cloud Computing",
    title: "Project-1",
    details:
      "Elit consectetur fugiat sunt consequat incididunt fugiat ipsum labore occaecat quis duis laboris. Exercitation eiusmod consectetur esse reprehenderit fugiat sunt aliquip aliquip mollit amet amet. Ad nisi aliqua fugiat elit amet reprehenderit duis cupidatat nisi amet reprehenderit amet Lorem anim.",
  },
  {
    id: Math.random(),
    category: "web dev",
    title: "Project-1",
    details:
      "Minim deserunt anim commodo enim ex. Nulla aliquip eu cupidatat commodo ut incididunt eu minim velit. Aute veniam cillum ex culpa nisi velit do qui nostrud anim in ut id pariatur. Irure nostrud nulla deserunt ullamco nulla elit laborum aliquip esse adipisicing voluptate elit. Aliquip ut adipisicing eiusmod commodo pariatur velit dolor dolor proident minim occaecat proident. Ea voluptate officia laboris ex officia anim in ut aliqua deserunt anim nisi amet.",
  },
  {
    id: Math.random(),
    category: "Cloud Computing",
    title: "Project-1",
    details:
      "Lorem ad nisi cillum duis irure sunt minim. Reprehenderit quis culpa magna amet minim excepteur anim consectetur. Id aliquip et amet commodo laborum.",
  },
]

const Projects = ({ data }) => {
  const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:8000/notes")
  //     .then(res => res.json())
  //     .then(data => setNotes(data))
  // }, [])

  console.log(data)

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <Layout>
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
