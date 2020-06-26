
import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"
import AudioPlayer from "./useAudioPlayer"

const Episodes = () => {
  
return (
  <Container>
    <Intro>
      <Name>Midweek Murders</Name>
      <Slogan>A true crime comedy podcast</Slogan>

      <Text>
        If you like what you hear, please rate, reveiw and subscribe (preferably
        on Itunes). Listen here, or on:
        <ul
          style={{
            marginTop: `10px`,
            marginLeft: `0px`,
          }}
        >
          <ListenIcon
            href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Podcast size="26" background="transparent" />
            <p style={{ transform: `translateX(-10px)`, fontSize: `0.75rem` }}>
              Itunes
            </p>
          </ListenIcon>
          <ListenIcon
            href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Spotify size="26" />
            <p style={{ transform: `translateX(-10px)`, fontSize: `0.75rem` }}>
              Spotify
            </p>
          </ListenIcon>
          <ListenIcon
            href="https://www.stitcher.com/s?fid=544619&refid=stpr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Stitcher}
              style={{
                transform: `translateY(26px)`,
                width: `22px`,
                height: `22px`,
              }}
              alt="Stitcher icon"
            />
            <p style={{ transform: `translateX(-14px)`, fontSize: `0.75rem` }}>
              Stitcher
            </p>
          </ListenIcon>
        </ul>
      </Text>
    </Intro>
    <Card>
      <Thumbnail>
        <Logo />
      </Thumbnail>
      <Column>
        <Date>24</Date>
        <Month>June</Month>
      </Column>
      <Icons>
        <Icon
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fembed.sounder.fm%2Fplay%2F43055"
        >
          <TwitterWithCircle size="40" />
        </Icon>
        <Icon
          className="fb-share-button"
          href="https://www.facebook.com/sharer/sharer.php?u=https://embed.sounder.fm/play/430055"
        >
          <FacebookCircle size="40" />
        </Icon>
        <Icon href="https://embed.sounder.fm/play/43055">
          <Share size="40" />
        </Icon>
      </Icons>
      <AudioPlayer url="https://embed.sounder.fm/play/43055" />
    
      <TextContainer>
        <PodTitle>The Pimlico Mystery</PodTitle>
        <Description>
          The case discussed is the poisoning of Thomas Edwin Bartlett. Joe
          solves the case using his trusty companion, science, and Sandra
          speculates about how many food items one eats whole without chewing.
        </Description>
      </TextContainer>
    </Card>
    <Card>
      <Thumbnail>
        <Logo />
      </Thumbnail>
      <Column>
        <Date>17</Date>
        <Month>June</Month>
      </Column>
      <Icons>
        <Icon
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fembed.sounder.fm%2Fplay%2F42428"
        >
          <TwitterWithCircle size="40" />
        </Icon>
        <Icon
          className="fb-share-button"
          href="https://www.facebook.com/sharer/sharer.php?u=https://embed.sounder.fm/play/42428"
        >
          <FacebookCircle size="40" />
        </Icon>
        <Icon href="https://embed.sounder.fm/play/42428">
          <Share size="40" />
        </Icon>
      </Icons>
      <AudioPlayer url="https://embed.sounder.fm/play/42428" />
     
      <TextContainer>
        <PodTitle>Russian Spies</PodTitle>
        <Description>
          In this episode Sandra talks about 'bee medicine', Joe explains
          nerve agents, and the case discussed is the Salisbury poisonings,
          a.k.a the attempted murders of Sergei and Yulia Skripal, as well as
          the death of Dawn Sturgess.
        </Description>
      </TextContainer>
    </Card>
  </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
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
`
const Text = styled.span`
  flex-direction: row;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: Montserrat;
`

const ListenIcon = styled.a`
  display: inline-block;
  list-style: none;
  padding-right: 10px;
  padding-left: 12px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
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

export default Episodes
