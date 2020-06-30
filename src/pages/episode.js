import React from "react"
import SEO from "../components/seo"
import PageContainer from "../components/container"
import { Router } from '@reach/router'
import EpisodeComp from "../components/episodeComp"
import { graphql } from "gatsby"

const EpisodePage = ({ data }) => {
    return (
        <>
            <EpisodeComp episode={data.markdownRemark.frontmatter} />
        </>
    )
}

// <Router>
//     <EpisodeComp path="/episode/:serial" />
// </Router>

export default EpisodePage


export const EpisodeQuery = graphql`
  query EpisodePageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        serial
        descriptionText
        date
        month
      }
    }
  }
`;