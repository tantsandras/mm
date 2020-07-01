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
    background-color: #1e1c3c;
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
            content: "A True Crime Comedy Podcast",
          },
          {
            name: "keywords",
            content: "best podcasts uk,comedy podcast,uk podcasts,true crime comedy podcast,Midweek Murders,crime podcasts",
          },
        ]}
      >
        <html lang="en" style={{ fontFamily: `"Oswald", "Montserrat"` }} />

      </Helmet>
      <GlobalStyle />
      <NavBar />
      <MainContent>{children}</MainContent>

      <Footer />
    </>
  )
}

const MainContent = styled.main`
  min-height: 100vh;
  height: auto !important;
  z-index: 0;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
