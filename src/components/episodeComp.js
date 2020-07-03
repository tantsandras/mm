import React from "react"
import PageContainer from "./container"
import styled from "styled-components"
import AudioPlayer from "./useAudioPlayer"

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
  font-family: Oswald;
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
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
`
const Text = styled.span`
  flex-direction: row;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: Montserrat;
`

const ImageWrapper = styled.div`
width: 100%;
height: auto;
margin: 0 auto;
padding: 40px;
`

const EpisodeComp = ({ episode }) => {
  const { title, serial, number, longText, date, month, images } = episode

  return (

    <PageContainer header={serial}>
      <Container>
        <Intro>

          <Name>{title}</Name>
          <Slogan>{date} {month}</Slogan>

          {images.map(
            img => (
              <ImageWrapper>
                <img src={img.image} alt={img.alt} />
              </ImageWrapper>
            )
          )}
          <Text>{longText}</Text>
          <AudioPlayer url={`https://embed.sounder.fm/play/${number}`} />
        </Intro>
      </Container>
    </PageContainer >
  )
}



export default EpisodeComp