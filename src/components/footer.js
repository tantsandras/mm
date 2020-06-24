import React from "react"
import styled, { keyframes } from "styled-components"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"

const Footer = () => (
  <Container>
    <ListenBox>
      <Text>Listen here, or on:</Text>
      <ul>
        <ListenIcon
          href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Podcast size="24" background="transparent" />
          <p style={{ transform: `translateX(-10px)` }}>Itunes</p>
        </ListenIcon>
        <ListenIcon
          href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Spotify size="24" />
          <p style={{ transform: `translateX(-14px)` }}>Spotify</p>
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
              width: `22px`,
              height: `22px`,
            }}
            alt="Stitcher icon"
          />
          <p style={{ transform: `translateX(-16px)` }}>Stitcher</p>
        </ListenIcon>
      </ul>
    </ListenBox>
    <Credit>
      Contact: midweekmurders@gmail.com <br /> © {new Date().getFullYear()},
      Design and code by Sandra Grahl
    </Credit>
  </Container>
)

const Text = styled.p`
  color: #5f728c;
  font-size: 0.85rem;
  text-align: left;
  font-family: Montserrat;
`

const Container = styled.footer`
  background-color: #1e1c3c;
  display: flex;
  flex-flow: row wrap;
  min-height: 400px;
  height: auto;
  margin-top: 80px;
  width: 100vw;
`
const ListenBox = styled.article`
flex-basis: 100%
align-self: center;
text-align: left;
margin-left: 16%;
margin-top: 10%;
font-family: Montserrat;
font-size: 0.85rem;
`

const Credit = styled.p`
  margin-right: 16%;
  margin-bottom: 10%;
  text-align: right;
  flex-basis: 100%;
  align-self: flex-end;
  color: #5f728c;
  font-family: Oswald;
  font-size: 0.95rem;
  line-height: 2;
`
const ListenIcon = styled.a`
  display: inline-block;
  list-style: none;
  padding-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`

export default Footer
