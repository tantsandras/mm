import React from "react"
import styled from "styled-components"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"
import {
  Itunes,
  Googlepodcasts,
  Castbox,
  Tunein,
  Playerfm
} from "@styled-icons/simple-icons"
import Wrapper from "./wrapper"
import Article from "./article"


const Episodes = ({ children }) => {
  return (
    <Wrapper>
      <Article name="Midweek Murders" slogan="A true crime comedy podcast">
        <Text>
          If you like what you hear, please rate, reveiw and subscribe
          (preferably on Itunes).
        </Text>
      </Article>

      <Article name="Listen on">
        <Text2>
          <ListenIcon
            href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Itunes"
          >
            <Itunes size="22" aria-hidden="true" />
            Itunes
          </ListenIcon>


          <ListenIcon
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9taWR3ZWVrbXVyZGVycy5zb3VuZGVyLmZtL3Nob3cvV3pQWHovcnNzLnhtbA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Google Play"
          >
            <Googlepodcasts size="22" aria-hidden="true" />
            Google
          </ListenIcon>
          <ListenIcon
            href="https://castbox.fm/channel/Midweek-Murders-id3009183?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=Midweek%20Murders-CastBox_FM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Castbox"
          >
            <Castbox size="22" aria-hidden="true" />
            Castbox
          </ListenIcon>
          <ListenIcon
            href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Apple"
          >
            <Podcast size="22" aria-hidden="true" />
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
                width: `19px`,
                height: `19px`,
                marginTop: `1.5px`,
                marginBottom: `1.5px`,
              }}
              alt="Stitcher icon"
            />
            Stitcher
          </ListenIcon>
          <ListenIcon
            href="https://tunein.com/podcasts/True-Crime-Podcasts/Midweek-Murders-p1339835/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Tune in"
          >
            <Tunein size="22" aria-hidden="true" />
            TuneIn
          </ListenIcon>

          <ListenIcon
            href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Spotify"
          >
            <Spotify size="22" aria-hidden="true" />
            Spotify
          </ListenIcon>
          <ListenIcon
        href="https://player.fm/series/midweek-murders"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Listen on Player fm"
      >
        <Playerfm size="22" aria-hidden="true" />
        PlayerFM
      </ListenIcon>
        </Text2>
      </Article>
      {children}
    </Wrapper>
  )
}

const Text = styled.span`
  flex-direction: row;
  color: #e5e5e5;
  font-size: 0.85rem;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  line-height: 2;
`
const Text2 = styled.span`
  display: flex;
  flex-flow: row wrap;
  color: #e5e5e5;
  font-size: 0.75rem;
  // text-align: left;
  font-family: "Montserrat", sans-serif;
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
