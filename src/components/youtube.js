import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Trailer (1).png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

    return (
        <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Artwork with text 'Youtube' and the Midweek Murder logo."
        />
    )
}

export default Image