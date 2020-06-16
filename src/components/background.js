import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image-es5"
import styled, { keyframes } from "styled-components"
import Logo from "./logo"
import { PlayCircleFilled } from "@styled-icons/material"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import AudioPlayer from "./player"

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
const Card = styled.div`
  margin-top: 4%;
  position: relative;
  min-width: 320px;
  max-width: 40vw;
  margin: 0 auto;
  height: auto;
  background-color: #fff;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`
const Thumbnail = styled.div`
  float: left;
  position: relative;
  left: 20px;
  top: -40px;
  height: 140px;
  width: 140px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`

const Column = styled.span`
  flex-direction: column;
  position: absolute;
  top: 142px;
  left: 65px;
  float: left;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const TextContainer = styled.div`
  margin-left: 160px;
  margin-right: 20px;
  height: auto;
`

const PodTitle = styled.h2`
  font-family: Oswald;
  font-size: 26px;
  text-transform: uppercase;
  border-bottom: 1px solid #100b2b;
  padding-top: 40px;
  padding-bottom: 6px;
  color: #100b2b;
`

const Description = styled.p`
  text-align: left;
  padding-top: 10px;
  font-size: 0.95rem;
  color: #100b2b;
`

const Date = styled.h3`
  font-family: Oswald;
  z-index: 6;
  font-size: 3rem;
  color: #7b9c95;
  border-bottom: 1px #7b9c95 solid;
  padding-bottom: 6px;
`

const Month = styled.h4`
  text-transform: uppercase;
  font-family: Montserrat;
  font-weight: 400;
  z-index: 6;
  font-size: 1.4rem;
  color: #7b9c95;
  transform: translateY(-20px);
`

const Icons = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;
`

const Icon = styled.li`
  display: inline;
  list-style: none;
  padding-right: 40px;
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
          <Card>
            <Thumbnail>
              <Logo />
            </Thumbnail>
            <Column>
              <Date></Date>
              <Month></Month>
            </Column>
            <TextContainer>
              <PodTitle>Trailer</PodTitle>
              <Description></Description>
            </TextContainer>

            <Icons>
              <Icon>
                <TwitterWithCircle size="40" color="#7b9c95" />
              </Icon>
              <Icon>
                <FacebookCircle size="40" color="#7b9c95" />
              </Icon>
              <Icon>
                <Share size="40" color="#7b9c95" />
              </Icon>
            </Icons>
            <div
              style={{
                display: `grid`,
                justifyContent: `center`,
                alignItems: `center`,
                textAlign: `center`,
              }}
            >
              <div
                style={{
                  display: `flex -webkit-box -moz-box -webkit-flex -ms-flexbox`,
                  flexDirection: `row`,
                  justifyContent: `center`,
                  textAlign: `center`,
                  fontFamily: `Montserrat`,
                  alignContent: `center`,
                  width: `100%`,
                }}
              >
                <AudioPlayer
                  track={
                    "https://drive.google.com/uc?export=download&id=1J9p4Z2x8m8JznV1kwdrynTiDAxn6b592"
                  }
                />
              </div>
            </div>
          </Card>
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
