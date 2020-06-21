import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import Logo from "./logo"
import { PlayCircleFilled } from "@styled-icons/material"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import AudioPlayer from "./AudioPlayer"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"

const Episodes = () => (
  <Container>
    <Intro>
      <Name>Midweek Murders</Name>
      <Slogan>A true crime comedy podcast</Slogan>

      <Text>
        If you like what you hear, please rate, reveiw and subscribe (preferably
        on Itunes). Listen here, or on:
        <ul
          style={{
            marginTop: `20px`,
          }}
        >
          <ListenIcon
            href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Podcast size="30" background="transparent" />
            <p style={{ transform: `translateX(-12px)`, fontSize: `0.95rem` }}>Itunes</p>
          </ListenIcon>
          <ListenIcon
            href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Spotify size="30" />
            <p style={{ transform: `translateX(-14px)`, fontSize: `0.95rem`  }}>Spotify</p>
          </ListenIcon>
          <ListenIcon
            href="https://www.stitcher.com/podcast/midweek-murders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Stitcher}
              style={{
                transform: `translateY(28px)`,
                width: `28px`,
                height: `28px`,
              }}
            />
            <p style={{ transform: `translateX(-18px)`, fontSize: `0.95rem`  }}>Stitcher</p>
          </ListenIcon>
        </ul>
      </Text>
    </Intro>
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
          href="https://twitter.com/intent/tweet?text=Listen%20to%20Midweek%20Murders%20on%20Sounder.fm%0A--%20https://midweekmurders.sounder.fm/show/midweek-murders"
        >
          <TwitterWithCircle size="40" />
        </Icon>
        <Icon
          className="fb-share-button"
          href="https://www.facebook.com/sharer/sharer.php?u=https://midweekmurders.sounder.fm/show/midweek-murders"
        >
          <FacebookCircle size="40" />
        </Icon>
        <Icon href="https://midweekmurders.sounder.fm/show/midweek-murders">
          <Share size="40" />
        </Icon>
      </Icons>
      <Break />
      <AudioPlayer url="https://embed.sounder.fm/e/ba8d621b9ff2454eb73d7d6585644fa8/aLn9D?player_style=blue" />
      <div
        style={{
          fontFamily: `Montserrat`,
          fontSize: `12px`,
          color: `#999`,
          opacity: `0.5`,
          paddingTop: `5px`,
        }}
      >
        powered by{" "}
        <a
          href="https://sounder.fm?utm_campaign=saas&utm_source=sounder.fm-Episode&utm_medium=sounder&utm_content=sounder-embedded-poweredbysounder&utm_term=EN"
          style={{ color: `#999` }}
          target="_blank"
        >
          Sounder
        </a>
      </div>
      <TextContainer>
        <PodTitle>Russian Spies</PodTitle>
        <Description>
          In this weeks episode Sandra talks about 'bee medicine', Joe explains
          nerve agents, and the case discussed is the Salisbury poisonings,
          a.k.a the attempted murders of Sergei and Yulia Skripal, as well as
          the death of Dawn Sturgess.
        </Description>
      </TextContainer>
    </Card>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`
const Intro = styled.article`
  flex-basis: 60%;
  margin: 4% 16%;
  margin-bottom: 120px;
`

const Name = styled.h2`
  font-family: Oswald;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid #9DBCE7;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #9DBCE7;
`

const Slogan = styled.h3`
  color: #9DBCE7;
  margin-top: -20px;
  font-size: 0.95rem;
  font-family: Montserrat;
  font-weight: 400;
`
const Text = styled.span`
  flex-direction: row;
  color: #9DBCE7;
  font-size: 0.95rem;
  text-align: left;
  font-family: Montserrat;
`

const ListenIcon = styled.a`
  display: inline-block;
  list-style: none;
  padding-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: #9DBCE7;
  &:hover {
    color: #d22d4c;
  }
`
const Card = styled.div`
  margin-top: 4%;
  position: relative;
  min-width: 300px;
  max-width: 40vw;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
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
const Break = styled.div`
  flex-basis: 100%;
  height: 0;
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
  border-bottom: 1px solid #282d50;
  padding-bottom: 6px;
  color: #282d50;
`

const Description = styled.p`
  text-align: left;
  padding-top: 10px;
  font-size: 0.95rem;
  color: #1e1c3c;
  font-family: Montserrat;
`

const Date = styled.h3`
  font-family: Oswald;
  z-index: 6;
  font-size: 3.4rem;
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
