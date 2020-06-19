import React from "react"
import styled, { keyframes } from "styled-components"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"

const Footer = () => (
  <Container>
    <ListenBox>
      <Text>Listen here, or on:</Text>
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
          <Podcast size="24" background="transparent" />
          <p style={{ transform: `translateX(-12px)` }}>Itunes</p>
        </ListenIcon>
        <ListenIcon
          href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Spotify size="24" />
          <p style={{ transform: `translateX(-16px)` }}>Spotify</p>
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
          />
          <p style={{ transform: `translateX(-18px)` }}>Stitcher</p>
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
  color: #9dbce7;
  font-size: 0.95rem;
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
`

const Credit = styled.p`
  margin-right: 16%;
  margin-bottom: 10%;
  text-align: right;
  flex-basis: 100%;
  align-self: flex-end;
  color: #9dbce7;
  font-family: Oswald;
  font-weight: 400;
  line-height: 2;
`
const ListenIcon = styled.a`
  display: inline-block;
  list-style: none;
  padding-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: #9dbce7;
  &:hover {
    color: #d22d4c;
  }
`

export default Footer
