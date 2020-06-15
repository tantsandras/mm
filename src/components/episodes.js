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

const Episodes = () => (
  <Container>
    <Intro>
      <Name>Midweek Murders</Name>
      <Slogan>Another true crime comedy podcast</Slogan>

      <Text>
        Listen here, or on:
        <ul
          style={{
            marginTop: `20px`,
          }}
        >
          <ListenIcon>
            <ItunesNote size="40" color="#e62347" background="transparent" />
            <p style={{ transform: `translateX(-8px)` }}>Itunes</p>
          </ListenIcon>
          <ListenIcon>
            <Spotify size="40" color="#e62347" />
            <p style={{ transform: `translateX(-10px)` }}>Spotify</p>
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
      <TextContainer>
        <PodTitle>Russian Spies</PodTitle>
        <Description>
          In this weeks episode Sandra talks about 'bee medicine', Joe explains
          what novichok is, and the case discussed is the attemted murders of
          Sergei and Yulia Skripal, as well as the death of Dawn Sturgess.
        </Description>
      </TextContainer>

      <Icons>
        <Icon>
          <TwitterWithCircle size="40" color="#7b9c95" />
        </Icon>
        <Icon>
          <FacebookCircle size="40" color="#7b9c95" />
        </Icon>
        <Icon>
          <Share size="40" color="#7b9c95" />
        </Icon>
      </Icons>
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
              "https://drive.google.com/uc?export=download&id=18O-p98ImNpFEvnfYnkew6YJFmlzVtaUL"
            }
          />
        </div>
      </div>
    </Card>
  </Container>
)

const Container = styled.div`
  flex-flow: row wrap;
  margin-top: 4%;
  padding: 0% 16% 16% 16%;
`
const Intro = styled.article`
  position: relative;
  min-width: 80vw;
  min-height: 240px;
  padding: 4% 16% 4% 16%;
  margin-bottom: 120px;
`

const Name = styled.h2`
  font-family: Oswald;
  text-transform: uppercase;
  border-bottom: 1px solid #100b2b;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #100b2b;
`

const Slogan = styled.h3`
  color: #100b2b;
  margin-top: -20px;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
`
const Text = styled.span`
  flex-direction: row;
  color: #100b2b;
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
  min-width: 380px;
  max-width: 40vw;
  margin: 0 auto;
  height: auto;
  background-color: #fff;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`
const Thumbnail = styled.div`
  float: left;
  position: relative;
  left: 20px;
  top: -40px;
  height: 160px;
  width: 160px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`

const Column = styled.span`
  flex-direction: column;
  position: absolute;
  top: 142px;
  left: 65px;
  float: left;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const TextContainer = styled.div`
  margin-left: 200px;
  margin-right: 20px;
  height: auto;
`

const PodTitle = styled.h2`
  font-family: Oswald;
  font-size: 26px;
  text-transform: uppercase;
  border-bottom: 1px solid #100b2b;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #100b2b;
`

const Description = styled.p`
  text-align: left;
  padding-top: 10px;
  font-size: 0.95rem;
  color: #100b2b;
`

const Date = styled.h3`
  font-family: Oswald;
  z-index: 6;
  font-size: 3rem;
  color: #7b9c95;
  border-bottom: 1px #7b9c95 solid;
  padding-bottom: 6px;
`

const Month = styled.h4`
  text-transform: uppercase;
  font-family: Montserrat;
  font-weight: 400;
  z-index: 6;
  font-size: 1.4rem;
  color: #7b9c95;
  transform: translateY(-20px);
`

const Icons = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;
`

const Icon = styled.li`
  display: inline;
  list-style: none;
  padding-right: 40px;
`

export default Episodes
