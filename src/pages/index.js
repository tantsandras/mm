import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import StyledBackground from "../components/background"
import Newsletter from "../components/newsletter"
import Latest from "../components/latest"
import EpisodeCard from "../components/episodeCard"

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto !important;
  padding-bottom: 200px;
  min-width: 100vw;
  font-family: 'Oswald', sans-serif;
`

const IndexPage = ({ data }) => {
  return (
  <>
    <SEO title="Home" />
    <Wrapper>
      <StyledBackground id="home" />
      <Latest> 
      {renderEpisodes(data.allMarkdownRemark.edges)}
      </Latest>
      <Newsletter />
    </Wrapper>
  </>
)
function renderEpisodes(episode) {


  return episode.map(item => {
      const { slug } = item.node.fields
      const { title, serial, number, date, month, descriptionText } = item.node.frontmatter
      return (
          <EpisodeCard
              number={number}
              date={date}
              month={month}
              serial={serial}
              title={title}
              description={descriptionText}
              slug={slug}
          />
      )
  })
}
}

export default IndexPage



export const NewQuery = graphql`
query {
        allMarkdownRemark(
          sort: {fields: [frontmatter___serial], order: DESC }
          limit: 1
      ) {
        edges {
          node {
            frontmatter {
            title
            serial
            number
            date
            month
            descriptionText
          }
          fields {
                slug
            }
            }
          }
        }
      }
    `
