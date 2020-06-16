import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MusicArtist } from "@styled-icons/zondicons"
import { MoneyPoundCircle, ArrowLeftCircle } from "@styled-icons/remix-fill"
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

const NavBar = () => (
  <>
    <Navigation>
      <StyledLink href="#about">
        <MusicArtist size="24" color="#e62347" />
        <Label style={{ marginLeft: `18px` }}>About</Label>
      </StyledLink>
      <StyledLink href="#episodes">
        <Radio size="30" color="#e62347" />
        <Label>Listen</Label>
      </StyledLink>
      <StyledLink href="#contact">
        <Email size="24" color="#e62347" />
        <Label style={{ marginLeft: `18px` }}>Contact</Label>
      </StyledLink>
      <StyledLink href="#shop">
        <ShoppingCart size="30" color="#e62347" />
        <Label>Shop</Label>
      </StyledLink>
      <StyledLink href="#support">
        <MoneyPoundCircle size="30" color="#e62347" />
        <Label>Support</Label>
      </StyledLink>
    </Navigation>

    <Wrapper>
      <StyledBackground id="home" />

      <Container id="about">
        <BackButton href="#home">
          <ArrowLeftCircle size="40" color="#e62347" />
          <Label>Home</Label>
        </BackButton>
        <HexDiv>
          &#x2B22;
          <HeadLine>About</HeadLine>
        </HexDiv>
        <About />
      </Container>
      <Container id="episodes">
        <BackButton href="#home">
          <ArrowLeftCircle size="40" color="#e62347" />
          <Label>Home</Label>
        </BackButton>
        <HexDiv>
          &#x2B22;
          <HeadLine>Episodes</HeadLine>
        </HexDiv>
        <Episodes />
      </Container>
      <Container id="contact">
        <BackButton href="#home">
          <ArrowLeftCircle size="40" color="#e62347" />
          <Label>Home</Label>
        </BackButton>
        <HexDiv>
          &#x2B22;
          <HeadLine>Contact</HeadLine>
        </HexDiv>
        <Contact />
      </Container>
      <Container id="shop">
        <BackButton href="#home">
          <ArrowLeftCircle size="40" color="#e62347" />
          <Label>Home</Label>
        </BackButton>
        <HexDiv>
          &#x2B22;
          <HeadLine>Shop</HeadLine>
        </HexDiv>
        <Shop />
      </Container>
      <Container id="support">
        <BackButton href="#home">
          <ArrowLeftCircle size="40" color="#e62347" />
          <Label>Home</Label>
        </BackButton>
        <HexDiv>
          &#x2B22;
          <HeadLine>Support the show</HeadLine>
        </HexDiv>
        <Support />
      </Container>
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
  color: #100b2b;
  font-size: 20px;
  margin-left: 12px;
  margin-top: 6px;
  padding-bottom: 2px;
  text-transform: uppercase;
  z-index: 2;
`

const BackButton = styled.a`
  align-self: flex-start;
  margin-left: 60px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  &:hover ${Label} {
    max-width: 80px;
    animation: 0.2s ${fadeIn} forwards 0.2s;
    border-bottom: 1px solid #100b2b;
  }
`

const HexDiv = styled.span`
  text-align: center;
  color: #100b2b;
  font-size: 270px;
  z-index: 50;
  margin-bottom: 80px;
  margin-top: 120px;
`

const Wrapper = styled.div`
  background-color: #7b9c95;
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
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #100b2b;
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
    border-bottom: 1px solid #100b2b;
  }
`

const Container = styled.section`
  background-color: #7b9c95;
  padding-top: 4%;
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 0;
  opacity: 0;
  transition: all ease-in 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:target {
    opacity: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: auto !important;
    z-index: 2;
  }
`

const HeadLine = styled.h1`
  transform: translateY(-24px);
  border-bottom: 1px solid #fff;
  padding-bottom: 6px;
  font-family: "Montserrat";
  color: #fff;
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  z-index: 50;
  &:target {
    animation: 2s ${fadeIn} forwards 0.5s;
  }
`

export default NavBar
