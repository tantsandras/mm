import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      width: `100%`,
      backgroundColor: `#100b2b`,
    }}
  >
    <h1
      style={{
        color: `#46617c`,
        textAlign: `right`,
        fontFamily: "Montserrat",
        textTransform: `uppercase`,
        fontSize: `26px`,
        padding: `3%`,
        marginBottom: 0,
      }}
    >
      Another true crime podcast
    </h1>
    <div
      style={{
        maxWidth: `360px`,
        margin: `0 auto`,
        flex: 1,
        zIndex: 1,
        transform: `translateY(178px)`,
        marginTop: -60,
      }}
    >
      <Image />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
