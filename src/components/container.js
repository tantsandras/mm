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
  font-family: "Oswald", sans-serif;
  letter-spacing: 0.05em;
  color: #e5e5e5;
  font-size: 0.75rem;
  margin-left: 6px;
  margin-top: 2.5px;
  text-transform: uppercase;
  z-index: 2;
`

const BackButton = styled.span`
  align-self: flex-start;
  margin-left: 2rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  &:hover ${Label} {
    max-width: 80px;
    animation: 0.2s ${fadeIn} forwards 0.2s;
  }
`

const HexDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-top: -20px;
  font-family: "Oswald", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #d32c4c;
  text-shadow: 2px 2px #e5e5e5, 3px 3px #1e1c3c;
`

const PageContainer = ({ id, header, children }) => (
  <Container id={id}>
    <BackButton>
      <AniLink swipe direction="left" to="/" aria-label="Back to home page">
        <LeftArrowCircle size="30" color="#e5e5e5" aria-hidden="true" />
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
