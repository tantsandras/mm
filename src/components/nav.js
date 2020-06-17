import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MusicArtist } from "@styled-icons/zondicons"
import { MoneyPoundCircle } from "@styled-icons/remix-fill"
import { Radio } from "@styled-icons/boxicons-solid"
import { ShoppingCart } from "@styled-icons/evaicons-solid"
import { Email } from "@styled-icons/entypo"
import styled, { keyframes } from "styled-components"
import About from "./about"
import Episodes from "./episodes"
import StyledBackground from "./background"
import Contact from "./contact"
import Shop from "./shop"
import Support from "./support"
import PageContainer from "./container"

const NavBar = () => (
  <>
    <Navigation>
      <StyledLink href="#about">
        <MusicArtist size="24" color="#D22D4C" />
        <Label style={{ marginLeft: `18px` }}>About</Label>
      </StyledLink>
      <StyledLink href="#episodes">
        <Radio size="30" color="#D22D4C" />
        <Label>Listen</Label>
      </StyledLink>
      <StyledLink href="#contact">
        <Email size="24" color="#D22D4C" />
        <Label style={{ marginLeft: `18px` }}>Contact</Label>
      </StyledLink>
      <StyledLink href="#merch">
        <ShoppingCart size="30" color="#D22D4C" />
        <Label>Merch</Label>
      </StyledLink>
      <StyledLink href="#support">
        <MoneyPoundCircle size="30" color="#D22D4C" />
        <Label>Support</Label>
      </StyledLink>
    </Navigation>

    <Wrapper>
      <StyledBackground id="home" />
      <PageContainer id={"about"} header={"About"}>
        <About />
      </PageContainer>
      <PageContainer id={"episodes"} header={"Episodes"}>
        <Episodes />
      </PageContainer>
      <PageContainer id={"contact"} header={"Contact"}>
        <Contact />
      </PageContainer>
      <PageContainer id={"merch"} header={"Merch"}>
        <Shop />
      </PageContainer>
      <PageContainer id={"support"} header={"Support the show"}>
        <Support />
      </PageContainer>
    </Wrapper>
  </>
)

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
  font-family: Oswald;
  color: #1e1c3c;
  font-size: 1rem;
  margin-left: 12px;
  margin-top: 6px;
  padding-bottom: 2px;
  text-transform: uppercase;
  z-index: 2;
`

const Wrapper = styled.div`
  background-color: #7a938f;
  min-height: 100vh;
  height: auto !important;
  min-width: 100vw;
  font-family: Montserrat, sans-serif;
  position: relative;
`
const Navigation = styled.nav`
  position: fixed;
  margin-right: 6px;
  left: 0;
  margin-top: 0 !important;
  margin-bottom 0 !important;
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1e1c3c;
`
const StyledLink = styled.a`
  flex-direction: row;
  text-decoration: none;
  display: inline-block;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 6px;
  text-align: center;
  &:hover ${Label} {
    max-width: 80px;
    animation: 0.2s ${fadeIn} forwards 0.2s;
    border-bottom: 1px solid #282d50;
  }
`

export default NavBar
