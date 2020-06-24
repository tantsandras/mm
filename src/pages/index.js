import React from "react"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import StyledBackground from "../components/background"

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto !important;
  padding-bottom: 200px;
  min-width: 100vw;
  font-family: Montserrat, sans-serif;
  position: relative;
`

const IndexPage = ({transitionStatus, entry, exit}) => (
  <>
    <SEO title="Home" />
    <Wrapper>
      <StyledBackground id="home" status={transitionStatus} />
    </Wrapper>
  </>
)

export default IndexPage
