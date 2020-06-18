import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Shop from "../components/shop"

const ShopPage = () => (
  <Layout>
    <SEO title="Merch" />
    <PageContainer id={"merch"} header={"Merch"}>
      <Shop />
    </PageContainer>
  </Layout>
)

export default ShopPage
