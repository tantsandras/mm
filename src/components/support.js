import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import Image from "./comingSoon"

const Support = () => (
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
  background-color: transparent;
  width: 260px;
  overflow: hidden;
  display: block;
  padding-bottom: 600px;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

export default Support
