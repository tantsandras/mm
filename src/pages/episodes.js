import React from "react"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Episodes from "../components/episodes"

const EpisodesPage = ({ transitionStatus, entry, exit }) => {
  console.log("status:", transitionStatus, entry, exit)
  return (
  <>
    <SEO title="Episodes" />
    <PageContainer id={"episodes"} header={"Episodes"}>
      <Episodes status={transitionStatus} />
    </PageContainer>
  </>
  )}
  

export default EpisodesPage
