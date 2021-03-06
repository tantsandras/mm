import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
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
  font-family: "Oswald", sans-serif;
  color: #1e1c3c;
  font-size: 0.75rem;
  top: 2px;
  right: 54px;
  text-transform: lowercase;
  z-index: 2;
  white-space: nowrap;
`
const Card = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
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
  background-color: #fffafa;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const Column = styled.span`
  flex-direction: column;
  width: 140px;
  margin-bottom: -1.8rem;
  text-align: center;
`

const TextContainer = styled.div`
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  height: auto;
  padding-bottom: 2rem;
`

const PodTitle = styled.h4`
  margin-top: 10px;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1e1c3c;
`
const Divider = styled.div`
  position: relative;
  height: 1px;
  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0%;
    right: 0%;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      #d22d4c,
      transparent
    );
  }
`

const Description = styled.p`
  text-align: left;
  font-size: 0.75rem;
  color: #1e1c3c;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0px;
`

const Date = styled.h3`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
  z-index: 6;
  color: #d32c4c;
`

const ReadMore = styled.div`
  position: absolute;
  bottom: 0px;
  right: 4px;
  background-color: #d32c4c;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  flex-direction: row;
  text-decoration: none;
  display: inline-block;
  &:hover ${Label} {
    max-width: 300px;
    margin: 6px;
    animation: 0.2s ${fadeIn} forwards 0.2s;
  }
`

const Month = styled.h4`
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  z-index: 6;
  color: #d22d4c;
  transform: translateY(-16px);
`

const Icons = styled.span`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-end;
  transform: translateY(-36px);
  width: 100%;
  z-index: 6;
`

const Icon = styled.a`
  padding-left: 30px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
    cursor: pointer;
  }
`

const EpisodeCard = ({
  slug,
  number,
  date,
  month,
  serial,
  title,
  description,
}) => {
  const [index] = useState(() => Math.floor(Math.random() * 11))

  const imagesArray = [
    "https://midweekmurders.netlify.app/imgUploads/14.png",
    "https://midweekmurders.netlify.app/imgUploads/15.png",
    "https://midweekmurders.netlify.app/imgUploads/16.png",
    "https://midweekmurders.netlify.app/imgUploads/17.png",
    "https://midweekmurders.netlify.app/imgUploads/18.png",
    "https://midweekmurders.netlify.app/imgUploads/19.png",
    "https://midweekmurders.netlify.app/imgUploads/20.png",
    "https://midweekmurders.netlify.app/imgUploads/21.png",
    "https://midweekmurders.netlify.app/imgUploads/22.png",
    "https://midweekmurders.netlify.app/imgUploads/23.png",
    "https://midweekmurders.netlify.app/imgUploads/24.png",
    "https://midweekmurders.netlify.app/imgUploads/25.png",
  ]

  const image = imagesArray[index]

  return (
    <Card>
      <Icons>
        <Icon
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fembed.sounder.fm%2Fplay%2F${number}`}
          aria-label="Share on twitter"
        >
          <TwitterWithCircle size="26" aria-hidden="true" />
        </Icon>
        <Icon
          className="fb-share-button"
          href={`https://www.facebook.com/sharer/sharer.php?u=https://embed.sounder.fm/play/${number}`}
          aria-label="Share on facebook"
        >
          <FacebookCircle size="26" aria-hidden="true" />
        </Icon>
        <Icon
          href={`https://embed.sounder.fm/play/${number}`}
          aria-label="Link to embed this episode"
        >
          <Share size="26" aria-hidden="true" />
        </Icon>
      </Icons>

      <Column>
        <Date>{date}</Date>
        <Divider></Divider>
        <Month>{month}</Month>
      </Column>

      <AudioPlayer url={`https://embed.sounder.fm/play/${number}`} />

      <TextContainer>
        <PodTitle>
          {serial}. {title}
        </PodTitle>
        <Description>{description}</Description>
      </TextContainer>

      <ReadMore>
        <AniLink
          cover
          to={`/episode/${slug}`}
          direction="right"
          duration={4}
          bg={`url(${image})
            center / contain
            no-repeat      
            fixed           
            padding-box     
            content-box     
            #1e1c3c`}
          aria-label="Read more about this episode"
        >
          <Label>More about this episode</Label>
          <RightArrowCircle
            size="41"
            color="#fffafa"
            style={{
              position: `absolute`,
              right: `-0.4px`,
              bottom: `0px`,
            }}
            aria-hidden="true"
          />
        </AniLink>
      </ReadMore>
    </Card>
  )
}
export default EpisodeCard
