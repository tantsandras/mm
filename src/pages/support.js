import React from "react"
import SEO from "../components/seo"
import PageContainer from "../components/container"
import Support from "../components/support"

const SupportPage = () => (
  <>
    <SEO title="Support" description="Support the show, coming soon" />
    <PageContainer id={"support"} header={"Support"}>
      <Support />
    </PageContainer>
  </>
)

export default SupportPage
