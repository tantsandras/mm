import React from "react"
import styled, { keyframes } from "styled-components"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"
import {
  TwitterWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social"
import Image from "./icon"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Itunes, Googlepodcasts, Castbox } from '@styled-icons/simple-icons'

const Footer = () => (
  <Container>

    <ListenBox>
      <Name>Listen</Name>
      <Text>
        <ListenIcon
          href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Itunes size="22" style={{ transform: `translateY(-3px)`, }} />
        </ListenIcon>
        <ListenIcon
          href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Spotify size="22" />

        </ListenIcon>
        <ListenIcon
          href="https://www.stitcher.com/s?fid=544619&refid=stpr "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Stitcher}
            style={{
              width: `18px`,
              height: `18px`,
            }}
            alt="Stitcher icon"
          />

        </ListenIcon>
        <ListenIcon
          href="https://podcasts.google.com/feed/aHR0cHM6Ly9taWR3ZWVrbXVyZGVycy5zb3VuZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Googlepodcasts size="20" style={{ transform: `translateY(-4px)`, }} />
        </ListenIcon>
        <ListenIcon
          href="https://castbox.fm/channel/Midweek-Murders-id3009183?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=Midweek%20Murders-CastBox_FM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Castbox size="22" style={{ transform: `translateY(-3px)`, }} />
        </ListenIcon>
        <ListenIcon
          href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Podcast size="22" style={{ transform: `translateY(1px)`, }} />

        </ListenIcon>
      </Text>
    </ListenBox>
    <Contact>
      <Name>Contact</Name>
      <Text2>
        <SocialLink
          href="https://twitter.com/midweekmurders/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterWithCircle
            size="22"
          />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/midweekmurders/"
          target="_blank"
          rel="noopener noreferrer">
          <InstagramWithCircle
            size="22"
          />
        </SocialLink><br />

        midweekmurders@gmail.com
  </Text2>
    </Contact>

    <div style={{ flexBasis: `80%`, margin: `200px 10% 2% 10%`, overflow: `hidden`, textAlign: `center` }}>

      <Thumbnail><ImgStyle /></Thumbnail>
      <NavFooter>
        <HexDiv> &#x2B22; </HexDiv>
        <AniLink paintDrip to="/" hex="#1e1c3c" style={{ color: `#d22d4c`, paddingRight: `10px`, textTransform: `uppercase`, textDecoration: `none` }}
          activeStyle={{ color: `#E5E5E5` }}>Home</AniLink>

        <AniLink paintDrip to="about" hex="#1e1c3c"
          style={{ color: `#d22d4c`, paddingRight: `10px`, textTransform: `uppercase`, textDecoration: `none` }}
          activeStyle={{ color: `#E5E5E5` }}
        >About</AniLink>
        <AniLink paintDrip to="episodes" hex="#1e1c3c"
          style={{ color: `#d22d4c`, paddingRight: `10px`, textTransform: `uppercase`, textDecoration: `none` }}
          activeStyle={{ color: `#E5E5E5` }}
        >Listen</AniLink>
        <AniLink paintDrip to="contact" hex="#1e1c3c"
          style={{ color: `#d22d4c`, paddingRight: `10px`, textTransform: `uppercase`, textDecoration: `none` }}
          activeStyle={{ color: `#E5E5E5` }}
        >Contact</AniLink>
        <AniLink paintDrip to="shop" hex="#1e1c3c"
          style={{ color: `#d22d4c`, paddingRight: `10px`, textTransform: `uppercase`, textDecoration: `none` }}
          activeStyle={{ color: `#E5E5E5` }}
        >Merch</AniLink>
        <AniLink paintDrip to="support" hex="#1e1c3c"
          style={{ color: `#d22d4c`, textTransform: `uppercase`, textDecoration: `none` }}
          activeStyle={{ color: `#E5E5E5` }}
        >Support</AniLink>
      </NavFooter>
      <Credit>© {new Date().getFullYear()},
      Design and code by Sandra Grahl</Credit>
    </div>
  </Container>
)

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`
const Name = styled.h6`
  font-family: Oswald;
  text-transform: uppercase;
  border-bottom: 0.5px solid #E5E5E5;
  padding-bottom: 6px;
  font-size: 0.85rem;
  font-weight: 400;
  color: #5f728c;
`

const NavFooter = styled.span`
display: inline-block;
flex-flow: row wrap;
text-align: center;
font-size: 0.85rem;
flex: 1;
`
const HexDiv = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 250px;
  z-index: 0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
  text-shadow: 0.5px 0.5px #1e1c3c, 5px 5px rgba(0, 0, 0, 0.05);
`
const SocialLink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`

const ImgStyle = styled(Image)`
max-width: 100%;
max-height: 100%;
display: block;
`

const Thumbnail = styled.div`
  margin: 0 auto;
  height: 100px;
  width: 100px;
  display: block;
  overflow: hidden;
  background-color: transparent;
  animation: ${turnVisible} 0.6s ease-in;
`


const Text = styled.p`
  margin-top: -20px;
  color: #5f728c;
  line-height: 2;
  text-align: left;
  font-family: Oswald;
  text-transform: uppercase;
`

const Text2 = styled.p`
  margin-top: -20px;
  color: #5f728c;
  line-height: 2.5;
  text-align: right;
  font-family: Oswald;
  font-size: 0.85rem;
`

const Container = styled.footer`
  background-color: #1e1c3c;
  display: flex;
  flex-flow: row wrap;
  min-height: 500px;
  height: auto;
  margin-top: 80px;
  width: 100vw;
`
const ListenBox = styled.article`
flex: 1;
text-align: left;
margin-left: 12%;
`

const Contact = styled.article`
  margin-right: 12%;
  text-align: right;
  flex: 1;
`

const Credit = styled.p`
flex: 1;
color: #5f728c;
font-family: Oswald;
font-size: 0.85rem;
padding-top: 200px;
`
const ListenIcon = styled.a`
  display: inline-block;
  list-style: none;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`

export default Footer
