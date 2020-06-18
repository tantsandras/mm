import React from "react"
import styled, { keyframes } from "styled-components"

const Footer = () => (
  <Container>
    <Credit>
      © {new Date().getFullYear()}, Design and code by Sandra Grahl
    </Credit>
  </Container>
)

const Container = styled.footer`
  background-color: #1e1c3c;
  display: flex;
  flex-flow: row wrap;
  min-height: 600px;
  margin-top: 80px;
  width: 100vw;
`

const Credit = styled.p`
  flex-basis: 100%;
  align-self: flex-end;
  color: #5F728C;
  font-family: Oswald;
  padding-left: 80px;
`

export default Footer
