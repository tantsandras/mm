import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

const Footer = () => (
  <Container>
    <p>© {new Date().getFullYear()}, Design and code by Sandra Grahl</p>
  </Container>
)

const Container = styled.footer`
  background-color: #100b2b;
  flex-flow: row wrap;
  color: #7b9c95;
  font-family: Oswald;
  min-height: 10vh;
  padding: 80px;
`

export default Footer
