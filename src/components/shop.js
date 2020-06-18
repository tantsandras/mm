import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import Image from "./comingSoon"

const Shop = () => (
  <Container>
    <Thumbnail>
      <Image />
    </Thumbnail>
  </Container>
)

const Thumbnail = styled.div`
  position: relative;
  top: 160px;
  left: 0px;
  height: 320px;
  width: 260px;
  display: block;
  overflow: hidden;
  background-color: transparent;
  padding-bottom: 600px;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

export default Shop
