import React from "react"
import SEO from "../components/seo"
import PageContainer from "../components/container"
import Episodes from "../components/episodes"
import EpisodeCard from "../components/episodeCard"
import { graphql } from "gatsby"

const EpisodesPage = ({ data }) => {

    return (
        <>
            <SEO title="Episodes" />
            <PageContainer id={"episodes"} header={"Episodes"} >
                <Episodes>
                    {renderEpisodes(data.allMarkdownRemark.edges)}
                </Episodes>
            </PageContainer>
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


export default EpisodesPage

export const EpisodesQuery = graphql`
{
    allMarkdownRemark (
        sort: { fields: [frontmatter___serial], order: DESC }
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
