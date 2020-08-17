import React from "react"
import SEO from "../components/seo"
import About from "../components/about"
import PageContainer from "../components/container"

const AboutPage = () => (
  <>
    <SEO title="About" description="Midweek Murders is a true crime comedy podcast, based in the UK" />
    <PageContainer id={"about"} header={"About"}>
      <About />
    </PageContainer>
  </>
)

export default AboutPage
