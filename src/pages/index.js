import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import StyledBackground from "../components/background"

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto !important;
  padding-bottom: 200px;
  min-width: 100vw;
  font-family: Montserrat, sans-serif;
  position: relative;
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Wrapper>
      <StyledBackground id="home" />
    </Wrapper>
  </>
)

export default IndexPage
