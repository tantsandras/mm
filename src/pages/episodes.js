import React from "react"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Episodes from "../components/episodes"

const EpisodesPage = () => (
  <>
    <SEO title="Episodes" />
    <PageContainer id={"episodes"} header={"Episodes"}>
      <Episodes />
    </PageContainer>
  </>
)

export default EpisodesPage
