import React from "react"
import styled, { keyframes } from "styled-components"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"

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
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.4rem;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  z-index: 50;
  &:target {
    animation: 2s ${fadeIn} forwards 0.5s;
  }
`

const PageContainer = ({ id, header, children }) => (
  <Container id={id}>
    <BackButton href="#home">
      <LeftArrowCircle size="40" color="#e62347" />
      <Label>Home</Label>
    </BackButton>
    <HexDiv>
      &#x2B22;
      <HeadLine>{header}</HeadLine>
    </HexDiv>
    {children}
  </Container>
)

export default PageContainer
