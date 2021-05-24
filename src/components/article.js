import React from "react"
import styled from "styled-components"

const Description = styled.article`
  flex-basis: 70%;
  margin: 4% 15% 6rem 15%;
`
const Slogan = styled.h3`
  color: #e5e5e5;
  margin-top: -16px;
  font-size: 0.95rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`
const Name = styled.h2`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: #d32c4c;
  padding-top: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
`
const Divider = styled.div`
  position: relative;
  height: 0.8px;
  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: -10%;
    right: 0%;
    width: 120%;
    height: 0.8px;
    background-image: linear-gradient(
      to right,
      transparent,
      #e5e5e5,
      transparent
    );
  }
`

const Article = ({ name, slogan, children }) => (
  <Description>
    <Name>{name}</Name>
    <Divider />
    <Slogan>{slogan}</Slogan>
    {children}
  </Description>
)

export default Article
