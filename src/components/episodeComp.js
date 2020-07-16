import React from "react"
import PageContainer from "./container"
import styled from "styled-components"
import AudioPlayer from "./useAudioPlayer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"


const Intro = styled.article`
  flex-basis: 70%;
  max-width: 70%;
  margin: 4% 15%;
`

const Name = styled.h2`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding-top: 12px;
  color: #5f728c;
`

const Divider = styled.div`
position: relative;
height: 1px;
&:before {
	content: "";
	position: absolute;
	top: -20px;
	left: -10%;
	right: 0%;
	width: 120%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, #e5e5e5, transparent);
}
`

const Slogan = styled.h3`
  color: #5f728c;
  margin-top: -16px;
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
max-width: 100%;
margin: 0 auto;
text-align: center;
padding: 40px 0px 40px 0px;
`


const EpisodeComp = ({ episode }) => {
  const { title, serial, number, longText, date, month, images } = episode

  return (

    <PageContainer header={serial}>

      <Intro>
        <Name>{title}</Name>
        <Divider> </Divider>
        <Slogan>{date} {month}</Slogan>

        {images.map(
          img => (
            <ImageWrapper>
              <img src={img.image} alt={img.alt} />
            </ImageWrapper>
          )
        )}
        <Text>{longText}</Text>
        <ImageWrapper>
          <AudioPlayer url={`https://embed.sounder.fm/play/${number}`} />
        </ImageWrapper>

      </Intro>


      <AniLink style={{ textDecoration: `none`, color: `#E5E5E5`, textTransform: `uppercase`, letterSpacing: `0.05em`, marginBottom: `200px` }}
        swipe direction="left" to="/episodes"
        aria-label="Back to episodes page"
      >
        <LeftArrowCircle size="30" color="#5f728c" aria-hidden="true" style={{ marginRight: `6px`, marginBottom: `4px` }} />
        Back to episodes</AniLink>
    </PageContainer>
  )
}



export default EpisodeComp