import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import StyledBackground from "../components/background"

const Wrapper = styled.div`
  background-color: #7a938f;
  min-height: 100vh;
  height: auto !important;
  min-width: 100vw;
  font-family: Montserrat, sans-serif;
  position: relative;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <StyledBackground id="home" />
    </Wrapper>
  </Layout>
)

export default IndexPage
