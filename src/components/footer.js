import React from "react"
import styled, { keyframes } from "styled-components"
import Listen from "./listenBox"
import Image from "./icon"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ContactBox from "./contactBox"

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const NavFooter = styled.span`
  display: inline-block;
  flex-flow: row wrap;
  text-align: center;
  font-family: "Oswald", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
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

const ImgStyle = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  display: block;
  background-color: transparent;
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

const Container = styled.footer`
  background-color: #1e1c3c;
  display: flex;
  flex-flow: row wrap;
  min-height: 500px;
  height: auto;
  margin-top: 80px;
  width: 100vw;
`

const Credit = styled.p`
  flex: 1;
  color: #5f728c;
  font-family: "Oswald", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  padding-top: 200px;
`

const Footer = () => (
  <Container>
    <Listen />

    <ContactBox />
    <div
      style={{
        flexBasis: `84%`,
        margin: `200px 8% 2% 8%`,
        overflow: `hidden`,
        textAlign: `center`,
      }}
    >
      <Thumbnail>
        <ImgStyle />
      </Thumbnail>
      <NavFooter>
        <HexDiv> &#x2B22; </HexDiv>
        <AniLink
          paintDrip
          to="/"
          hex="#1e1c3c"
          style={{
            color: `#d32c4c`,
            paddingRight: `8px`,
            textTransform: `uppercase`,
            fontWeight: `400`,
            textDecoration: `none`,
          }}
          activeStyle={{ color: `#E5E5E5` }}
        >
          Home
        </AniLink>

        <AniLink
          paintDrip
          to="/about"
          hex="#1e1c3c"
          style={{
            color: `#d32c4c`,
            paddingRight: `8px`,
            textTransform: `uppercase`,
            fontWeight: `400`,
            textDecoration: `none`,
          }}
          activeStyle={{ color: `#E5E5E5` }}
        >
          About
        </AniLink>
        <AniLink
          paintDrip
          to="/episodes/"
          hex="#1e1c3c"
          style={{
            color: `#d32c4c`,
            paddingRight: `8px`,
            textTransform: `uppercase`,
            fontWeight: `400`,
            textDecoration: `none`,
          }}
          activeStyle={{ color: `#E5E5E5` }}
        >
          Listen
        </AniLink>
        <AniLink
          paintDrip
          to="/contact"
          hex="#1e1c3c"
          style={{
            color: `#d32c4c`,
            paddingRight: `8px`,
            textTransform: `uppercase`,
            fontWeight: `400`,
            textDecoration: `none`,
          }}
          activeStyle={{ color: `#E5E5E5` }}
        >
          Contact
        </AniLink>
        <AniLink
          paintDrip
          to="/shop"
          hex="#1e1c3c"
          style={{
            color: `#d32c4c`,
            paddingRight: `8px`,
            textTransform: `uppercase`,
            fontWeight: `400`,
            textDecoration: `none`,
          }}
          activeStyle={{ color: `#E5E5E5` }}
        >
          Merch
        </AniLink>
        <AniLink
          paintDrip
          to="/support"
          hex="#1e1c3c"
          style={{
            color: `#d32c4c`,
            textTransform: `uppercase`,
            fontWeight: `400`,
            textDecoration: `none`,
          }}
          activeStyle={{ color: `#E5E5E5` }}
        >
          Support
        </AniLink>
      </NavFooter>

      <Credit>
        <a
          href="https://www.podchaser.com/podcasts/midweek-murders-1265761?utm_source=Midweek%20Murders%7C1265761&utm_medium=badge&utm_content=TRCAP1265761"
          target="__blank"
          rel="noopener noreferrer"
          aria-label="Review us on Podchaser"
          style={{ textDecoration: `none` }}
        >
          <img
            alt="Podchaser - Midweek Murders"
            src="https://imagegen.podchaser.com/badge/TRCAP1265761.png"
            style={{ width: `300px`, maxWidth: `100%`, marginBottom: `20px` }}
          />
        </a>{" "}
        <br />© {new Date().getFullYear()}, Design and code by Sandra Grahl
      </Credit>
    </div>
  </Container>
)

export default Footer
