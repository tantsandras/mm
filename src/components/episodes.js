
import React from "react"
import styled from "styled-components"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"
import { Itunes, Googlepodcasts, Castbox } from '@styled-icons/simple-icons'

const Episodes = ({ children }) => {

  return (
    <Container>
      <Intro>
        <Name>Midweek Murders</Name>
        <Slogan>A true crime comedy podcast</Slogan>

        <Text>
          If you like what you hear, please rate, reveiw and subscribe (preferably
          on Itunes). Listen here, or on: <br />
        <span
            style={{
              marginTop: `10px`,
              marginLeft: `0px`,
            }}
          >
            <ListenIcon
              href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Itunes"
            >
              <Itunes size="26" style={{ transform: `translateY(-4px)`, }} aria-hidden="true"/>
              <p style={{ transform: `translateX(-10px)`, fontSize: `0.75rem` }}>
                Itunes
            </p>
            </ListenIcon>
            <ListenIcon
              href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Spotify"
            >
              <Spotify size="26" style={{ transform: `translateY(3px)`, }} aria-hidden="true"/>
              <p style={{ transform: `translateX(-10px)`, fontSize: `0.75rem` }}>
                Spotify
            </p>
            </ListenIcon>

            <ListenIcon
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9taWR3ZWVrbXVyZGVycy5zb3VuZ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Google Play"
            >
              <Googlepodcasts size="24" style={{ transform: `translateY(-6px)`, }} aria-hidden="true"/>
              <p style={{ transform: `translateX(-10px)`, fontSize: `0.75rem` }}>
                Google
            </p>
            </ListenIcon>
            <ListenIcon
              href="https://castbox.fm/channel/Midweek-Murders-id3009183?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=Midweek%20Murders-CastBox_FM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Castbox"
            >
              <Castbox size="26" style={{ transform: `translateY(-4px)`, }} aria-hidden="true"/>
              <p style={{ transform: `translateX(-12px)`, fontSize: `0.75rem` }}>
                Castbox
            </p>
            </ListenIcon>
            <ListenIcon
              href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Apple"
            >
              <Podcast size="26" style={{ transform: `translate(-8px, 2px)`, }} aria-hidden="true"/>
              <p style={{ transform: `translateX(-14px)`, fontSize: `0.75rem` }}>
                Apple
            </p>
            </ListenIcon>
            <ListenIcon
              href="https://www.stitcher.com/s?fid=544619&refid=stpr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Stitcher"
            >
              <img
                src={Stitcher}
                style={{
                  transform: `translateY(28px)`,
                  width: `22px`,
                  height: `22px`,
                }}
                alt="Stitcher icon"
              />
              <p style={{ transform: `translateX(-12px)`, fontSize: `0.75rem` }}>
                Stitcher
            </p>
            </ListenIcon>
          </span>
        </Text>
      </Intro>
      {children}
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
`
const Text = styled.span`
  flex-direction: row;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  line-height: 2;
`

const ListenIcon = styled.a`
  display: inline-block;
  list-style: none;
  padding-right: 6px;
  padding-left: 6px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`

export default Episodes
