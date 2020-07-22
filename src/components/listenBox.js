import { Itunes, Googlepodcasts, Castbox, Tunein } from "@styled-icons/simple-icons"
import React from "react"
import styled from "styled-components"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"

const Name = styled.h5`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  // border-bottom: 0.5px solid #e5e5e5;
  padding-bottom: 6px;
  margin-bottom: 0px;
  letter-spacing: 0.05em;
  font-size: 0.85rem;
  font-weight: 400;
  color: #e5e5e5;
`

const Text = styled.p`
  display: flex;
  flex-flow: row wrap;
  margin-top: 16px;
  color: #5f728c;
  line-height: 2.5;
  text-align: left;
`
const ListenBox = styled.article`
  flex: 1;
  text-align: left;
  margin-left: 12%;
`

const ListenIcon = styled.a`
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 26px;
  padding-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`
const Divider = styled.div`
position: relative;
height: 1px;
&:before {
	content: "";
	position: absolute;
	left: -20%;
	right: 0%;
	width: 140%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, #e5e5e5, transparent);
}

`

const Listen = () => (
  <ListenBox>
    <Name>Listen</Name>
    <Divider> </Divider>
    <Text>
      <ListenIcon
        href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Listen on Itunes"
      >
        <Itunes size="22" aria-hidden="true" />
      </ListenIcon>
      <ListenIcon
        href="https://www.stitcher.com/s?fid=544619&refid=stpr "
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Listen on Stitcher"
      >
        <img
          src={Stitcher}
          style={{
            width: `19px`,
            height: `19px`,
            marginLeft: `1px`,
            marginRight: `2px`,
          }}
          alt="Stitcher icon"
        />
      </ListenIcon>
      <ListenIcon
        href="https://podcasts.google.com/feed/aHR0cHM6Ly9taWR3ZWVrbXVyZGVycy5zb3VuZ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Listen on Google Play"
      >
        <Googlepodcasts size="22" aria-hidden="true" />
      </ListenIcon>
      <ListenIcon
        href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Listen on Spotify"
      >
        <Spotify size="22" aria-hidden="true" />
      </ListenIcon>
      <ListenIcon
        href="https://castbox.fm/channel/Midweek-Murders-id3009183?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=Midweek%20Murders-CastBox_FM"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Listen on Castbox"
      >
        <Castbox size="22" aria-hidden="true" />
      </ListenIcon>
      <ListenIcon
        href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Listen on Apple"
      >
        <Podcast size="22" aria-hidden="true" />
      </ListenIcon>
      <ListenIcon
        href="https://tunein.com/podcasts/True-Crime-Podcasts/Midweek-Murders-p1339835/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Listen on Tune in"
      >
        <Tunein size="22" aria-hidden="true" />
      </ListenIcon>
    </Text>
  </ListenBox>
)

export default Listen
