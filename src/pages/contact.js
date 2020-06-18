import React from "react"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import PageContainer from "../components/container"
import Contact from "../components/contact"

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <PageContainer id={"contact"} header={"Contact"}>
      <Contact />
    </PageContainer>
  </>
)

export default ContactPage
