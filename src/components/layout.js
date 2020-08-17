/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import NavBar from "./nav"
import { Helmet } from "react-helmet"
import "./layout.css"
import Footer from "./footer"
import "typeface-oswald"
import "typeface-montserrat"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1e1c3c;
    font-family: 'Oswald', sans-serif;
  }
  h1 {
    font-family: 'Oswald', sans-serif;
  }
  p {
    font-family: 'Montserrat', sans-serif;
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
      <GlobalStyle />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: "A True Crime Comedy Podcast, based in the UK",
          },
          {
            name: "keywords",
            content: "podcasts uk, funny podcasts, true crime podcast british, comedy podcasts, Midweek Murders, true crime podcast with humor, true crime podcast about one case",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>

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
