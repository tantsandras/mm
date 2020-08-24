import React from "react"
import Wrapper from "./wrapper"
import Article from "./article"
import styled from "styled-components"
import YT from "./youtube"

const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0px 40px 0px;
  cursor: pointer;
`

const Latest = ({children}) => (
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
            <YT />
          </a>
        </ImageWrapper>
      </Article>
      <Article name="Latest episode" slogan="Listen here, or wherever you listen to podcasts">
      </Article>
      {children}

    </Wrapper>

  </section>
)

export default Latest
