
import React from "react"
import { MusicArtist } from "@styled-icons/zondicons"
import { MoneyPoundCircle } from "@styled-icons/remix-fill"
import { Radio } from "@styled-icons/boxicons-solid"
import { ShoppingCart } from "@styled-icons/evaicons-solid"
import { Email } from "@styled-icons/entypo"
import styled, { keyframes } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

const Label = styled.span`
  flex-direction: row;
  position: absolute;
  display: inline-block;
  max-width: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.1s ease-in;
  font-family: 'Oswald', sans-serif;
  color: #E5E5E5;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  margin-left: 8px;
  margin-top: 2px;
  padding-bottom: 1px;
  text-transform: uppercase;
  z-index: 2;
`

const Navigation = styled.nav`
  position: fixed;
  position: -webkit-fixed;
  margin-right: 6px;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  background-color: #1e1c3c;
`
const StyledLink = styled.span`
  flex-direction: row;
  text-decoration: none;
  display: inline-block;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 4px;
  text-align: center;
  &:hover ${Label} {
    max-width: 80px;
    animation: 0.2s ${fadeIn} forwards 0.2s;
    border-bottom: 0.5px solid #E5E5E5;
  }
`

const NavBar = () => (
  <>
    <Navigation>
      <StyledLink>
        <AniLink
          swipe
          direction="right"
          to="/about"
          style={{ color: `#d22d4c` }}
          activeStyle={{ color: `#5f728c` }}
        >
          <MusicArtist size="22" aria-hidden="true" />
          <Label style={{ marginLeft: `12px` }}>About</Label>
        </AniLink>
      </StyledLink>
      <StyledLink>
        <AniLink
          style={{ color: `#d22d4c` }}
          activeStyle={{ color: `#5f728c` }}
          swipe
          direction="right"
          to="/episodes"

        >
          <Radio size="26" aria-hidden="true" />
          <Label>Listen</Label>
        </AniLink>
      </StyledLink>
      <StyledLink>
        <AniLink
          style={{ color: `#d22d4c` }}
          activeStyle={{ color: `#5f728c` }}
          swipe
          direction="right"
          to="/contact"
        >
          <Email size="22" aria-hidden="true" />
          <Label style={{ marginLeft: `12px` }}>Contact</Label>
        </AniLink>
      </StyledLink>
      <StyledLink>
        <AniLink
          style={{ color: `#d22d4c` }}
          activeStyle={{ color: `#5f728c` }}
          swipe
          direction="right"
          to="/shop"
        >
          <ShoppingCart size="26" aria-hidden="true" />
          <Label>Merch</Label>
        </AniLink>
      </StyledLink>
      <StyledLink>
        <AniLink
          style={{ color: `#d22d4c` }}
          activeStyle={{ color: `#5f728c` }}
          swipe
          direction="right"
          to="/support"
        >
          <MoneyPoundCircle size="26" aria-hidden="true" />
          <Label>Support</Label>
        </AniLink>
      </StyledLink>
    </Navigation>
  </>
)

export default NavBar


