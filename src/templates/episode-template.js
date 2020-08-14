import React from "react"
import SEO from "../components/seo"
import EpisodeComp from "../components/episodeComp"
import { graphql } from "gatsby"
import PageContainer from "../components/container"

const EpisodePage = ({ data }) => {
  const tags = data.markdownRemark.frontmatter.hashtags.map(item => item.tag)
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} keywords={tags} />
      <PageContainer header={data.markdownRemark.frontmatter.serial}>
        <EpisodeComp episode={data.markdownRemark.frontmatter} html={data.markdownRemark.html} />
      </PageContainer>
    </>
  )
}



export default EpisodePage


export const EpisodeQuery = graphql`
  query EpisodePageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        serial
        number
        date
        month
        audioTranscript
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
