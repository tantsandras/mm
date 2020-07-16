
import React from "react"
import styled from "styled-components"
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
  filter: opacity(86%);
  top: -20px;
  left: 0px;
  height: auto;
  width: 300px;
  display: block;
  overflow: hidden;
  background-color: transparent;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 600px;
`

export default Shop
