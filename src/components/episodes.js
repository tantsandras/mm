import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import Logo from "./logo"
import { PlayCircleFilled } from "@styled-icons/material"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import AudioPlayer from "./player"
import { ItunesNote, Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"

const Episodes = () => (
  <Container>
    <Intro>
      <Name>Midweek Murders</Name>
      <Slogan>Another true crime comedy podcast</Slogan>

      <Text>
        If you like what you hear, please rate, reveiw and subscribe (preferably
        on Itunes). Listen here, or on:
        <ul
          style={{
            marginTop: `20px`,
          }}
        >
          <ListenIcon>
            <Podcast size="30" color="#D22D4C" background="transparent" />
            <p style={{ transform: `translateX(-12px)` }}>Itunes</p>
          </ListenIcon>
          <ListenIcon>
            <Spotify size="30" color="#D22D4C" />
            <p style={{ transform: `translateX(-14px)` }}>Spotify</p>
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
          href="https://twitter.com/intent/tweet?text=New%20MidweekMurders%20episode"
        >
          <TwitterWithCircle size="40" color="#7A938F" />
        </Icon>
        <Icon>
          <FacebookCircle size="40" color="#7A938F" />
        </Icon>
        <Icon>
          <Share size="40" color="#7A938F" />
        </Icon>
      </Icons>

      <Break />

      <div
        style={{
          display: `grid`,
          justifyContent: `center`,
          alignItems: `center`,
          textAlign: `center`,
        }}
      >
        <div
          style={{
            display: `flex -webkit-box -moz-box -webkit-flex -ms-flexbox`,
            flexDirection: `row`,
            justifyContent: `center`,
            textAlign: `center`,
            fontFamily: `Montserrat`,
            alignContent: `center`,
            width: `100%`,
          }}
        >
          <AudioPlayer
            track={
              "https://drive.google.com/uc?export=download&id=1hOJilpR0-v9iWCyRH7oikJd-OdBxtlQG"
            }
          />
        </div>
      </div>

      <TextContainer>
        <PodTitle>Russian Spies</PodTitle>
        <Description>
          In this weeks episode Sandra talks about 'bee medicine', Joe explains
          nerve agents, and the case discussed is the attempted murders of
          Sergei and Yulia Skripal, as well as the death of Dawn Sturgess.
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
`
const Intro = styled.article`
  flex-basis: 60%;
  margin: 4% 16%;
  margin-bottom: 120px;
`

const Name = styled.h2`
  font-family: Oswald;
  text-transform: uppercase;
  border-bottom: 1px solid #282d50;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #282d50;
`

const Slogan = styled.h3`
  color: #282d50;
  margin-top: -20px;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
`
const Text = styled.span`
  flex-direction: row;
  color: #282d50;
  font-size: 18px;
  text-align: left;
`

const ListenIcon = styled.li`
  display: inline-block;
  list-style: none;
  padding-right: 40px;
`
const Card = styled.div`
  margin-top: 4%;
  position: relative;
  min-width: 320px;
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
  height: 280px;
  width: 280px;
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
  margin-top: -80px;
  height: auto;
`

const PodTitle = styled.h2`
  font-family: Oswald;
  text-transform: uppercase;
  border-bottom: 1px solid #282d50;
  padding-bottom: 6px;
  color: #282d50;
`

const Description = styled.p`
  text-align: left;
  padding-top: 10px;
  font-size: 0.95rem;
  color: #282d50;
`

const Date = styled.h3`
  font-family: Oswald;
  z-index: 6;
  font-size: 3.4rem;
  color: #7a938f;
  border-bottom: 1px #7a938f solid;
  padding-bottom: 6px;
`

const Month = styled.h4`
  text-transform: uppercase;
  font-family: Montserrat;
  font-weight: 400;
  z-index: 6;
  font-size: 1.2rem;
  color: #7a938f;
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
  cursor: pointer;
`

export default Episodes
