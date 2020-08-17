import React from "react"
import SEO from "../components/seo"
import PageContainer from "../components/container"
import Shop from "../components/shop"

const ShopPage = () => (
  <>
    <SEO title="Merch" description="Merch, coming soon" />
    <PageContainer id={"merch"} header={"Merch"}>
      <Shop />
    </PageContainer>
  </>
)

export default ShopPage
