
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`

const Wrapper = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Wrapper