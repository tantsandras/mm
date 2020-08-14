
import React from "react"
import SEO from "../components/seo"
import PageContainer from "../components/container"
import Episodes from "../components/episodes"
import EpisodeCard from "../components/episodeCard"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const EpisodesPage = ({ data, pageContext }) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? 'episodes/' : (currentPage - 1).toString()
    const nextPage = 'episodes/' + (currentPage + 1).toString()

    return (
        <>
            <SEO title="Episodes" />
            <PageContainer id={"episodes"} header={"Episodes"} >
                <Episodes>
                    {renderEpisodes(data.allMarkdownRemark.edges)}
                </Episodes>

                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        listStyle: 'none',
                        padding: 0,
                        fontSize: `1rem`
                    }}
                >
                    {!isFirst && (
                        <AniLink
                            style={{ color: `#d22d4c`, textDecoration: `none`, paddingRight: `12px`, letterSpacing: `0.05em` }}
                            swipe direction="left"
                            aria-label="Previous page"
                            to={prevPage} rel="prev">
                            ← Previous
    </AniLink>
                    )}
                    {Array.from({ length: numPages }, (_, i) => (
                        <li
                            key={`pagination-number${i + 1}`}
                            style={{
                                margin: 0,
                                paddingRight: `12px`
                            }}
                        >
                            <AniLink
                                style={{ color: `#d22d4c`, textDecoration: `none` }}
                                activeStyle={{ color: `#5f728c` }}
                                swipe direction="right"
                                aria-label={`To page ${i === 0 ? '' : i + 1}`}
                                to={`episodes/${i === 0 ? '' : i + 1}`}
                            >
                                {i + 1}
                            </AniLink>
                        </li>
                    ))}
                    {!isLast && (
                        <AniLink
                            style={{ color: `#d22d4c`, textDecoration: `none`, letterSpacing: `0.05em` }}
                            swipe direction="right"
                            aria-label="Next page"
                            to={nextPage} rel="next">
                            Next →
    </AniLink>
                    )}
                </ul>
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
query EpisodesPageQuery($skip: Int!, $limit: Int!) {
                allMarkdownRemark(
                    sort: {fields: [frontmatter___serial], order: DESC }
            limit: $limit
            skip: $skip
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
