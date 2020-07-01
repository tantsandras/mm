import React from "react"
import SEO from "../components/seo"
import EpisodeComp from "../components/episodeComp"
import { graphql } from "gatsby"

const EpisodePage = ({ data }) => {
    return (
        <>
            <SEO title={data.markdownRemark.frontmatter.title} />
            <EpisodeComp episode={data.markdownRemark.frontmatter} />
        </>
    )
}



export default EpisodePage


export const EpisodeQuery = graphql`
  query EpisodePageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        serial
        longText
        date
        month
      }
    }
  }
`;