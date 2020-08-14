import React from "react"
import styled from "styled-components"
import AudioPlayer from "./useAudioPlayer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LeftArrowCircle, PlusCircle } from "@styled-icons/boxicons-regular"
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
const Topics = styled.h5`
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

const Summary = styled.summary`
color: #E5E5E5;
font-family: 'Oswald', sans-serif;
text-transform: uppercase;
font-weight: 400;
letter-spacing: 0.05em;
margin-top: 40px;
margin-bottom: 40px;
background-color: #d22d4c;
width: 185px;
padding: 6px;
border-radius: 6px;
-webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
-moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
transition: all 0.4s ease-in-out;
cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.75), 2px 2px 5px #1e1c3c;
    background-color: #1e1c3c;
  }
  
  &:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.75), inset -1px -1px 2px #1e1c3c;
  }
`


const Collapsible = styled.details`
margin-bottom: 100px;
`

const EpisodeComp = ({ episode, html }) => {
  const { title, number, date, month, audioTranscript, images, hashtags } = episode
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
          <Collapsible>
            <Summary>Audio Transcript <PlusCircle size="24" color="#e5e5e5" aria-hidden="true" style={{ marginTop: `-4px` }} /></Summary>
            <div>
              <Text>{audioTranscript}</Text>
            </div>
          </Collapsible>
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