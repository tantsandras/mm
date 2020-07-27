import React from "react"
import Wrapper from "./wrapper"
import Article from "./article"
import styled from "styled-components"
import YT from "../images/Trailer (1).png"

const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0px 40px 0px;
  cursor: pointer;
`

const Latest = () => (
  <section style={{ marginTop: `200px` }}>
    <Wrapper>
      <Article name="New" slogan="Midweek Murders is now on YouTube!">
        <ImageWrapper>
          <a
            href="https://www.youtube.com/channel/UCqJw512scIqd_a56nUxY2Vw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Midweek Murders channel on YouTube"
          >
            <img src={YT} alt="trailer artwork" />
          </a>
        </ImageWrapper>
      </Article>
    </Wrapper>
  </section>
)

export default Latest
