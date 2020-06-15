import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image-es5"
import styled, { keyframes } from "styled-components"

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const Title = styled.div`
  color: #e62347;
  font-size: 6vw;
  font-family: Oswald;
  width: 80%;
  text-align: left;
  vertical-align: center;
  position: absolute;
  mix-blend-mode: multiply;
  padding-left: 0.8em;
  top: 62%;
  left: 50%;
  transform: translate(-50%, 50%);
  text-transform: uppercase;
  line-height: 1.1;
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "mmcropped.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            style={{ filter: `contrast(110%) saturate(130%)` }}
            alt="Forest with noir feeling."
          >
            <Title>Midweek Murders</Title>
          </BackgroundImage>
        </>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-size: contain;
  position: relative;
  top: 0;
  z-index: 0;
  left: 0;
  height: 50vh;
  animation: ${turnVisible} 0.6s ease-in;
`

export default StyledBackgroundSection
