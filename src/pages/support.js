import React from "react"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Support from "../components/support"

const SupportPage = () => (
  <>
    <SEO title="Support" />
    <PageContainer id={"support"} header={"Support"}>
      <Support />
    </PageContainer>
  </>
)

export default SupportPage
