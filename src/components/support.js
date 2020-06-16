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
  top: 100px;
  left: 0px;
  height: 400px;
  width: 300px;
  overflow: hidden;
  padding-bottom: 1600px;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

export default Support
