import React from "react"
import styled from "styled-components"
import AudioPlayer from "./useAudioPlayer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"
import Article from "./article"

const Text = styled.p`
  flex-direction: row;
  max-width: 100%;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`

const ImageWrapper = styled.div`
max-width: 100%;
margin: 0 auto;
text-align: center;
padding: 40px 0px 40px 0px;
`

const Container = styled.section`
  flex-basis: 100%;
`
const Topics = styled.h4`
color: #E5E5E5;
font-family: 'Oswald', sans-serif;
text-transform: uppercase;
font-weight: 400;
letter-spacing: 0.05em;
margin-top: 40px;
`
const TopicList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 0;
font-size: 0.85rem;
color: #E5E5E5;
margin-top: 40px;
margin-bottom: 100px;
`

const Tag = styled.li`
margin-right: 20px;
`

const EpisodeComp = ({ episode, html }) => {
  const { title, number, date, month, images, hashtags } = episode
  return (
    <>

      <Container>
        <Article name={title} slogan={`${date} ${month}`}>

          {images.map(
            img => (
              <ImageWrapper>
                <img src={img.image} alt={img.alt} />
              </ImageWrapper>
            )
          )}
          <Text dangerouslySetInnerHTML={{ __html: html }} />
          <ImageWrapper>
            <AudioPlayer url={`https://embed.sounder.fm/play/${number}`} />
          </ImageWrapper>
          <Topics>Topics</Topics>
          <TopicList>

            {hashtags.map(
              item => (
                <Tag>
                  {item.tag}
                </Tag>
              )
            )}

          </TopicList>
          <AniLink style={{ textDecoration: `none`, color: `#E5E5E5`, textTransform: `uppercase`, letterSpacing: `0.05em`, fontSize: `1rem` }}
            swipe direction="left" to="/episodes"
            aria-label="Back to episodes page"
          >
            <LeftArrowCircle size="30" color="#5f728c" aria-hidden="true" style={{ marginRight: `6px`, marginBottom: `4px` }} />
            Back to episodes</AniLink>

        </Article>
      </Container>
    </>
  )
}



export default EpisodeComp