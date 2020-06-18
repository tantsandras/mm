import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Episodes from "../components/episodes"

const EpisodesPage = () => (
  <Layout>
    <SEO title="Episodes" />
    <PageContainer id={"episodes"} header={"Episodes"}>
      <Episodes />
    </PageContainer>
  </Layout>
)

export default EpisodesPage
