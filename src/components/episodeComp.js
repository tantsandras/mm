import React from "react"
import PageContainer from "./container"
import styled from "styled-components"
import AudioPlayer from "./useAudioPlayer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`
const Intro = styled.article`
  flex-basis: 70%;
  margin: 4% 15%;
`

const Name = styled.h2`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 0.5px solid #E5E5E5;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #5f728c;
`

const Slogan = styled.h3`
  color: #5f728c;
  margin-top: -20px;
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
`
const Text = styled.span`
  flex-direction: row;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`

const ImageWrapper = styled.div`
width: 100%;
height: auto;
margin: 0 auto;
text-align: center;
padding: 40px;
`


const EpisodeComp = ({ episode }) => {
  const { title, serial, number, longText, date, month, images } = episode

  return (

    <PageContainer header={serial}>
      <Container>

        <Intro>
          <Name>{title}

          </Name>
          <Slogan>{date} {month}</Slogan>

          {images.map(
            img => (
              <ImageWrapper>
                <img src={img.image} alt={img.alt} />
              </ImageWrapper>
            )
          )}
          <Text>{longText}</Text>
          <ImageWrapper style={{ paddingLeft: `0px`, paddingRight: `0px` }}>
            <AudioPlayer url={`https://embed.sounder.fm/play/${number}`} />
          </ImageWrapper>

        </Intro>


        <AniLink style={{ textDecoration: `none`, color: `#E5E5E5`, textTransform: `uppercase` }}
          swipe direction="left" to="/episodes"
          aria-label="Back to episodes page"
        >
          <LeftArrowCircle size="30" color="#5f728c" aria-hidden="true" style={{ marginRight: `6px`, marginBottom: `4px` }} />
          Back to episodes</AniLink>
      </Container>
    </PageContainer >
  )
}



export default EpisodeComp