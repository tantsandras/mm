
import React from "react"
import styled from "styled-components"
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
  top: -20px;
  left: 0px;
  height: auto;
  width: 300px;
  background-color: transparent;
  filter: opacity(86%);
  overflow: hidden;
  display: block;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 600px;
`

export default Support
