import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import About from "../components/about"
import PageContainer from "../components/container"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageContainer id={"about"} header={"About"}>
      <About />
    </PageContainer>
  </Layout>
)

export default AboutPage
