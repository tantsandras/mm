import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import { MusicArtist } from "@styled-icons/zondicons"
import { MoneyPoundCircle } from "@styled-icons/remix-fill"
import { Radio } from "@styled-icons/boxicons-solid"
import { ShoppingCart } from "@styled-icons/evaicons-solid"
import styled, { keyframes } from "styled-components"
import About from "./about"

const NavBar = () => (
  <>
    <Navigation>
      <StyledLink href="#about">
        <MusicArtist size="34" color="#e62347" />
      </StyledLink>
      <StyledLink href="#episodes">
        <Radio size="40" color="#e62347" />
      </StyledLink>

      <StyledLink href="#shop">
        <ShoppingCart size="40" color="#e62347" />
      </StyledLink>
      <StyledLink href="#support">
        <MoneyPoundCircle size="40" color="#e62347" />
      </StyledLink>
    </Navigation>

    <Wrapper>
      <Container id="about">
        <HexDiv>
          &#x2B22;
          <HeadLine>About</HeadLine>
        </HexDiv>
        <About />
      </Container>
      <Container id="episodes">
        <HexDiv>
          &#x2B22;
          <HeadLine>Episodes</HeadLine>
        </HexDiv>
      </Container>
      <Container id="shop">
        <HexDiv>
          &#x2B22;
          <HeadLine>Shop</HeadLine>
        </HexDiv>
      </Container>
      <Container id="support">
        <HexDiv>
          &#x2B22;
          <HeadLine>Support the show</HeadLine>
        </HexDiv>
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
const HexDiv = styled.span`
  text-align: center;
  color: #100b2b;
  font-size: 497px;
  z-index: 50;
  margin-right: 11px;
`

const Wrapper = styled.div`
  background: #46617c;
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
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
  background-color: #100b2b;
`
const StyledLink = styled.a`
  text-decoration: none;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 6px;
  text-align: center;
  &:hover {
    border-bottom: 0.6px solid #fff;
  }
`

const Container = styled.section`
  padding-top: 10%;
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
