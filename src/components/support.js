
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
const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`
const Thumbnail = styled.div`
  position: relative;
  top: 160px;
  left: 0px;
  height: 285px;
  background-color: transparent;
  width: 253px;
  overflow: hidden;
  display: block;
  
  animation: ${turnVisible} 0.6s ease-in;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 600px;
`

export default Support
