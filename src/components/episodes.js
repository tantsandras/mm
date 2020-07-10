
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
          on Itunes).

        </Text>
      </Intro>

      <Intro>
        <Name>Listen on</Name>
        <Text2>
          <ListenIcon
            href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Itunes"
          >
            <Itunes size="26" aria-hidden="true" />
            Itunes
          </ListenIcon>

          <ListenIcon
            href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Spotify"
          >
            <Spotify size="26" aria-hidden="true" />
            Spotify
          </ListenIcon>


          <ListenIcon
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9taWR3ZWVrbXVyZGVycy5zb3VuZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Google Play"
          >
            <Googlepodcasts size="26" aria-hidden="true" />
            Google
          </ListenIcon>
          <ListenIcon
            href="https://castbox.fm/channel/Midweek-Murders-id3009183?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=Midweek%20Murders-CastBox_FM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Castbox"
          >
            <Castbox size="26" aria-hidden="true" />
            Castbox
          </ListenIcon>
          <ListenIcon
            href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Apple"
          >
            <Podcast size="26" aria-hidden="true" />

            Apple
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
                width: `23px`,
                height: `23px`,
                marginTop: `2px`,
                marginBottom: `2px`,
              }}
              alt="Stitcher icon"
            />
            Stitcher
          </ListenIcon>
        </Text2>
      </Intro>
      {children}
    </Container >
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
  margin: 4% 15% 6% 15%;
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
const Text2 = styled.span`
  display: flex;
  flex-flow: row wrap;
  color: #E5E5E5;
  font-size: 0.75rem;
  // text-align: left;
  font-family: 'Montserrat', sans-serif;
  line-height: 2.5;
`

const ListenIcon = styled.a`
  display: flex;
  -webkit-flex-direction: column; 
  flex-direction: column;
  align-items: center;
  padding-right: 6px;
  padding-left: 6px;
  padding-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`

export default Episodes
