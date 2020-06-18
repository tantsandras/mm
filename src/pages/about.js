import React from "react"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import About from "../components/about"
import PageContainer from "../components/container"

const AboutPage = () => (
  <>
    <SEO title="About" />
    <PageContainer id={"about"} header={"About"}>
      <About />
    </PageContainer>
  </>
)

export default AboutPage
