import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Image = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "default.jpg" } }) {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)

  return (
    <Img
      alt={data.imageSharp.id}
      fluid={fluid ? fluid : data.imageSharp.fluid}
    />
  )
}

export default Image
