import React from "react"
import SEO from "../components/seo"
import PageContainer from "../components/container"
import Contact from "../components/contact"

const ContactPage = () => (
  <>
    <SEO title="Contact" description="Find @midweekmurders on Twitter, Instagram, Youtube or email us with your suggestions" />
    <PageContainer id={"contact"} header={"Contact"}>
      <Contact />
    </PageContainer>
  </>
)

export default ContactPage
