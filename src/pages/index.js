import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import StyledBackground from "../components/background"

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto !important;
  padding-bottom: 200px;
  min-width: 100vw;
  font-family: 'Oswald', sans-serif;
  position: relative;
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <link href="https://fonts.googleapis.com/css?family=Oswald:600&display=swap" rel="preconnect" />
    <Wrapper>
      <StyledBackground id="home" />
    </Wrapper>
  </>
)

export default IndexPage
