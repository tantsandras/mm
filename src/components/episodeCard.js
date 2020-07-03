import React from "react"
import styled, { keyframes } from "styled-components"
import Logo from "./logo"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import AudioPlayer from "./useAudioPlayer"
import { RightArrowCircle } from "@styled-icons/boxicons-regular"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`
const Label = styled.span`
  flex-direction: row;
  position: absolute;
  display: inline-block;
  max-width: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.1s ease-in;
  font-family: 'Oswald', sans-serif;
  color: #1e1c3c;
  font-size: 0.85rem;
  top: 10px;
  right: 65px;
  text-transform: uppercase;
  z-index: 2;
`
const Card = styled.div`
border-bottom-right-radius: 15%;
  margin-top: 100px;
  position: relative;
  min-width: 300px;
  max-width: 40vw;
  margin-left: 4%;
  margin-right: 4%;
  min-height: 100%;
  height: auto !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const Thumbnail = styled.div`
  transform: translateY(-30px);
  height: 115px;
  width: 160px;
  margin-right: 20px;
  margin-left: 20px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  background-color: #1e1c3c;
`
const Column = styled.span`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: flex-start;
  width: 100px;
  margin-right: 40px;
  padding-left: 30px;
`

const TextContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  height: auto;
  padding-bottom: 20px;
`

const PodTitle = styled.h4`
  margin-top: 10px;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 0.5px solid #1e1c3c;
  padding-bottom: 6px;
  color: #1e1c3c;
`

const Description = styled.p`
  text-align: left;
  font-size: 0.75rem;
  color: #1e1c3c;
  font-family: 'Montserrat', sans-serif;
`

const Date = styled.h3`
  font-family: 'Oswald', sans-serif;
  z-index: 6;
  color: #5f728ccc;
  border-bottom: 1px #5f728c solid;
  padding-bottom: 6px;
`

const ReadMore = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
	background-color: #d22d4c;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	-webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  flex-direction: row;
  text-decoration: none;
  display: inline-block;
  &:hover ${Label} {
    max-width: 80px;
    animation: 0.2s ${fadeIn} forwards 0.2s;
  }
`

const Month = styled.h4`
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  z-index: 6;
  color: #5f728c;
  transform: translateY(-20px);
`

const Icons = styled.ul`
  align-self: flex-start;
  padding-top: 15px;
  margin-left: -40px;
`

const Icon = styled.a`
  display: inline;
  list-style: none;
  padding-left: 40px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728ccc;
  &:hover {
    color: #282d50;
  }
`

const EpisodeCard = ({ slug, number, date, month, serial, title, description }) => {

  return (
    <Card>
      <Thumbnail>
        <Column>
          <Date>{date}</Date>
          <Month>{month}</Month>
        </Column>
      </Thumbnail>

      <Icons>
        <Icon
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fembed.sounder.fm%2Fplay%2F${number}`}
        >
          <TwitterWithCircle size="30" />
        </Icon>
        <Icon
          className="fb-share-button"
          href={`https://www.facebook.com/sharer/sharer.php?u=https://embed.sounder.fm/play/${number}`}
        >
          <FacebookCircle size="30" />
        </Icon>
        <Icon href={`https://embed.sounder.fm/play/${number}`}>
          <Share size="30" />
        </Icon>
      </Icons>
      <AudioPlayer url={`https://embed.sounder.fm/play/${number}`} />

      <TextContainer>
        <PodTitle>{serial}. {title}</PodTitle>
        <Description>{description}</Description>
      </TextContainer>
      <ReadMore>
        <AniLink paintDrip to={`/episode/${slug}`} hex="#1e1c3c" duration={1}>
          <Label>More</Label>
          <RightArrowCircle size="50" color="#E5E5E5" style={{
            position: `absolute`, right: `0px`,
            bottom: `0px`
          }} />
        </AniLink>
      </ReadMore>
    </Card >
  )
}
export default EpisodeCard