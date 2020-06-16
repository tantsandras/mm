import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

const Footer = () => (
  <Container>
    <Credit>
      © {new Date().getFullYear()}, Design and code by Sandra Grahl
    </Credit>
  </Container>
)

const Container = styled.footer`
  background-color: #100b2b;
  display: flex;
  flex-flow: row wrap;
  min-height: 600px;
  margin-top: 80px;
`

const Credit = styled.p`
  flex-basis: 100%;
  align-self: flex-end;
  color: #7b9c95;
  font-family: Oswald;
  padding-left: 80px;
`

export default Footer
