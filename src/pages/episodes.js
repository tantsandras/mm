import React from "react"
import SEO from "../components/seo"
import PageContainer from "../components/container"
import Episodes from "../components/episodes"


const EpisodesPage = () => {
  return (
  <>
    <SEO title="Episodes" />
    <PageContainer id={"episodes"} header={"Episodes"} >
      <Episodes />
    </PageContainer>
  </>
  )}
  

export default EpisodesPage
