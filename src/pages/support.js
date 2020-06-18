import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Support from "../components/support"

const SupportPage = () => (
  <Layout>
    <SEO title="Support" />
    <PageContainer id={"support"} header={"Support"}>
      <Support />
    </PageContainer>
  </Layout>
)

export default SupportPage
