import React from "react"
import styled, { keyframes } from "styled-components"
import Logo from "./logo"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import AudioPlayer from "./useAudioPlayer"
import { RightArrowCircle } from "@styled-icons/boxicons-regular"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import slugTransformer from "./slugTransformer"

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
  font-family: Oswald;
  color: #1e1c3c;
  font-size: 0.85rem;
  top: 10px;
  left: 65px;
  padding-bottom: 2px;
  text-transform: uppercase;
  z-index: 2;
`
const Card = styled.div`
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
  transform: translateY(-40px);
  height: 260px;
  width: 270px;
  margin-left: 20px;
  margin-right: 20px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`
const Column = styled.span`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: flex-start;
  padding-top: 26px;
  width: 100px;
  margin-right: 40px;
  padding-left: 30px;
`

const TextContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  margin-top: 40px;
  height: auto;
`

const PodTitle = styled.h2`
  font-family: Oswald;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 0.5px solid #1e1c3c;
  padding-bottom: 6px;
  color: #1e1c3c;
`

const Description = styled.p`
  text-align: left;
  padding-top: 10px;
  font-size: 0.85rem;
  color: #1e1c3c;
  font-family: Montserrat;
`

const Date = styled.h3`
  font-family: Oswald;
  z-index: 6;
  font-size: 3rem;
  color: #5f728ccc;
  border-bottom: 1px #7a938f solid;
  padding-bottom: 6px;
`

const ReadMore = styled.div`
  position: relative;
  margin-bottom: -20px;
  transform: translateX(80px);
	background-color: #d22d4c;
	width: 60px;
	height: 60px;
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
    border-bottom: 0.5px solid #1e1c3c;
  }
`

const Month = styled.h4`
  text-transform: uppercase;
  font-family: Montserrat;
  font-weight: 400;
  z-index: 6;
  font-size: 1.2rem;
  color: #5f728ccc;
  transform: translateY(-20px);
`

const Icons = styled.ul`
  align-self: flex-start;
  padding-top: 30px;
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

const EpisodeCard = ({ number, date, month, serial, title, description }) => {
  const slug = slugTransformer(title);
  return (
    <Card>
      <Thumbnail>
        <Logo />
      </Thumbnail>
      <Column>
        <Date>{date}</Date>
        <Month>{month}</Month>
      </Column>
      <Icons>
        <Icon
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fembed.sounder.fm%2Fplay%2F${number}`}
        >
          <TwitterWithCircle size="40" />
        </Icon>
        <Icon
          className="fb-share-button"
          href={`https://www.facebook.com/sharer/sharer.php?u=https://embed.sounder.fm/play/${number}`}
        >
          <FacebookCircle size="40" />
        </Icon>
        <Icon href={`https://embed.sounder.fm/play/${number}`}>
          <Share size="40" />
        </Icon>
      </Icons>
      <AudioPlayer url={`https://embed.sounder.fm/play/${number}`} />

      <TextContainer>
        <PodTitle>{serial}. {title}</PodTitle>
        <Description>{description}</Description>
      </TextContainer>
      <ReadMore>
        <AniLink paintDrip to={`/episode/${slug}`} hex="#1e1c3c">
          <Label>More</Label>
          <RightArrowCircle size="60" color="#E5E5E5" style={{
            position: `absolute`, right: `0px`,
            bottom: `0px`
          }} />
        </AniLink>
      </ReadMore>
    </Card >
  )
}
export default EpisodeCard