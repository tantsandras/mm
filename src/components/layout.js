/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import NavBar from "./nav"
import { Helmet } from "react-helmet"
import "./layout.css"
import Footer from "./footer"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Oswald, Montserrat;
    background-color: #5F728CB3;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: "True Crime Comedy Podcast",
          },
          {
            name: "keywords",
            content:
              "True Crime podcast, Comedy podcast, UK Podcasts, True Crime Comedy Podcast, UK true crime podcast, Midweek Murders",
          },
        ]}
      >
        <html lang="en" style={{ fontFamily: `"Oswald", "Montserrat"` }} />
      </Helmet>
      <GlobalStyle />

      <MainContent>{children}</MainContent>
      <NavBar />
      <Footer />
    </>
  )
}

const MainContent = styled.main`
  min-height: 100vh;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
