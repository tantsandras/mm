import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Contact from "../components/contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageContainer id={"contact"} header={"Contact"}>
      <Contact />
    </PageContainer>
  </Layout>
)

export default ContactPage
