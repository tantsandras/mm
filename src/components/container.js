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
  color: #E5E5E5;
  font-size: 0.85rem;
  margin-left: 12px;
  margin-top: 6px;
  padding-bottom: 2px;
  text-transform: uppercase;
  z-index: 2;
`

const BackButton = styled.span`
  align-self: flex-start;
  margin-left: 60px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  &:hover ${Label} {
    max-width: 80px;
    animation: 0.2s ${fadeIn} forwards 0.2s;
    border-bottom: 0.5px solid #E5E5E5;
  }
`

const HexDiv = styled.div`
  text-align: center;
  font-size: 230px;
  margin-top: 70px;
  margin-bottom: 80px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
  text-shadow: 0.5px 0.5px #1e1c3c, 10px 10px rgba(0, 0, 0, 0.05);
`
const Container = styled.section`
  padding-top: 4%;
  min-height: 100vh;
  height: auto !important;
  transition: all ease-in 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
`

const HeadLine = styled.h1`
  font-family: Oswald;
  font-size: 3rem;
  transform: translateY(-16px);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
  text-shadow: 2px 2px #d22d4c, 3px 3px #5f728c;
`

const PageContainer = ({ id, header, children }) => (
  <Container id={id}>
    <BackButton>
      <AniLink swipe direction="left" to="/" >
        <LeftArrowCircle size="40" color="#5f728c" />
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
