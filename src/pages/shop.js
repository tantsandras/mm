import React from "react"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Shop from "../components/shop"

const ShopPage = () => (
  <>
    <SEO title="Merch" />
    <PageContainer id={"merch"} header={"Merch"}>
      <Shop />
    </PageContainer>
  </>
)

export default ShopPage
