import React from "react"
import styled from "styled-components"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"
import IHeartRadio from "../images/heartRadio.png"
import {
  Itunes,
  Googlepodcasts,
  Castbox,
  Tunein,
  Playerfm,
} from "@styled-icons/simple-icons"
import Wrapper from "./wrapper"
import Article from "./article"

const Episodes = ({ children }) => {
  return (
    <Wrapper>
      <Article name="Midweek Murders" slogan="A true crime comedy podcast">
        <Text>
          If you like what you hear, please rate, reveiw and subscribe
          (preferably on Apple Podcasts).
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
            <Itunes size="21" aria-hidden="true" style={{ marginTop: `1px` }} />
            Itunes
          </ListenIcon>


          <ListenIcon
            href="https://castbox.fm/channel/Midweek-Murders-id3009183?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=Midweek%20Murders-CastBox_FM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Castbox"
          >
            <Castbox size="22" aria-hidden="true" style={{ marginTop: `0.3px` }} />
            Castbox
          </ListenIcon>
          <ListenIcon
            href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Apple"
          >
            <Podcast size="22" aria-hidden="true" style={{ marginTop: `0.4px` }} />
            Apple
          </ListenIcon>

          <ListenIcon
            href="https://player.fm/series/midweek-murders"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Player fm"
          >
            <Playerfm size="21" aria-hidden="true" style={{ marginTop: `1px` }} />
            PlayerFM
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
            <Spotify size="21" aria-hidden="true" style={{ marginTop: `1px` }} />
            Spotify
          </ListenIcon>
          <ListenIcon
            href="https://www.iheart.com/podcast/269-midweek-murders-69295996/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on I heart radio"
            style={{ marginLeft: `-4px` }}
          >
            <img
              src={IHeartRadio}
              style={{
                width: `24px`,
                height: `20px`,
                marginTop: `1px`,
                marginBottom: `1px`,
                marginLeft: `-4px`
              }}
              alt="iHeart radio icon"
            />
            iHeartRadio
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
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`

export default Episodes
