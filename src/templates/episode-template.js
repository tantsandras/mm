import React from "react"
import SEO from "../components/seo"
import EpisodeComp from "../components/episodeComp"
import { graphql } from "gatsby"

const EpisodePage = ({ data }) => {
  const tags = data.markdownRemark.frontmatter.hashtags.map(item => item.tag)
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} keywords={tags} />
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
        number
        longText
        date
        month
        images {
            alt
            image
          }
        hashtags {
            tag
        }
      }
    }
  }
`;
