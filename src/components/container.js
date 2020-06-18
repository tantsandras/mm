import React from "react"
import styled, { keyframes } from "styled-components"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"
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
  font-family: Oswald;
  color: #282d50;
  font-size: 1rem;
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
    border-bottom: 1px solid #282d50;
  }
`

const HexDiv = styled.span`
  text-align: center;
  color: #1e1c3c;
  font-size: 270px;
  margin-bottom: 80px;
  margin-top: 120px;
`

const Container = styled.section`
  background-color: #7a938f;
  padding-top: 4%;
  min-height: 100vh;
  height: auto;
  transition: all ease-in 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
`

const HeadLine = styled.h1`
  border-bottom: 1px solid #fff;
  padding-bottom: 6px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.4rem;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  z-index: 3;
`

const PageContainer = ({ id, header, children }) => (
  <Container id={id}>
    <BackButton>
      <AniLink swipe top="entry" to="/">
      <LeftArrowCircle size="40" color="#D22D4C" />
      <Label>Home</Label>
      </AniLink>
    </BackButton>
    <HexDiv>
      &#x2B22;
      <HeadLine>{header}</HeadLine>
    </HexDiv>
    {children}
  </Container>
)

export default PageContainer
