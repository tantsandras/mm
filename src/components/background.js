import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image-es5"
import styled, { keyframes } from "styled-components"
import Logo from "./logo"
import { PlayCircleFilled } from "@styled-icons/material"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import AudioPlayer from "./AudioPlayer"

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const Title = styled.div`
  color: #d22d4c;
  font-size: 4rem;
  font-family: Oswald;
  width: 100%;
  text-align: left;
  vertical-align: center;
  position: absolute;
  mix-blend-mode: multiply;
  top: 78.6%;
  left: 21%;
  text-transform: uppercase;
  line-height: 1;
`
const Card = styled.div`
  margin-top: 4%;
  margin-bottom: 600px;
  position: relative;
  min-width: 320px;
  max-width: 40vw;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const Thumbnail = styled.div`
  transform: translateY(-40px);
  height: 280px;
  width: 280px;
  margin-left: 20px;
  margin-right: 20px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`
const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`

const Column = styled.span`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: flex-start;
  padding-top: 26px;
  width: 100px;
  margin-right: 40px;
  padding-left: 30px;
`

const TextContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  margin-top: 40px;
  height: auto;
`

const PodTitle = styled.h2`
  font-family: Oswald;
  font-size: 2.6rem;
  text-transform: uppercase;
  border-bottom: 1px solid #282d50;
  padding-bottom: 6px;
  color: #282d50;
`

const Description = styled.p`
  text-align: left;
  padding-top: 10px;
  font-size: 0.95rem;
  color: #1e1c3c;
  font-family: Montserrat;
`

const Icons = styled.ul`
  align-self: flex-start;
  padding-top: 30px;
  margin-left: -40px;
`

const Icon = styled.a`
  display: inline;
  list-style: none;
  padding-left: 40px;
  text-decoration: none;
  cursor: pointer;
  color: #5F728C;
  &:hover {
    color: #282d50;
  }
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
            style={{
              marginBottom: `200px`,
            }}
            alt="Forest with noir feeling."
          >
            <Title>Midweek Murders</Title>
          </BackgroundImage>
          <Card>
            <Thumbnail>
              <Logo />
            </Thumbnail>
            <Column></Column>
            <Icons>
              <Icon
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=Listen%20to%20Midweek%20Murders%20on%20Sounder.fm%0A--%20https://midweekmurders.sounder.fm/show/midweek-murders"
              >
                <TwitterWithCircle size="40" />
              </Icon>
              <Icon
                className="fb-share-button"
                href="https://www.facebook.com/sharer/sharer.php?u=https://midweekmurders.sounder.fm/show/midweek-murders"
              >
                <FacebookCircle size="40" />
              </Icon>
              <Icon href="https://midweekmurders.sounder.fm/show/midweek-murders">
                <Share size="40" />
              </Icon>
            </Icons>
            <Break />
            <AudioPlayer url="https://embed.sounder.fm/e/ba8d621b9ff2454eb73d7d6585644fa8/jz18L?player_style=blue" />
            <div
              style={{
                fontFamily: `Montserrat`,
                fontSize: `12px`,
                color: `#999`,
                opacity: `0.5`,
                paddingTop: `5px`,
              }}
            >
              powered by{" "}
              <a
                href="https://sounder.fm?utm_campaign=saas&utm_source=sounder.fm-Episode&utm_medium=sounder&utm_content=sounder-embedded-poweredbysounder&utm_term=EN"
                style={{ color: `#999` }}
                target="_blank"
              >
                Sounder
              </a>
            </div>
            <TextContainer>
              <PodTitle>Trailer</PodTitle>
              <Description>
                Midweek Murders is a True Crime Comedy podcast based in the UK
                made by Sandra and Joe. They talk about a different case each
                week, where Sandra introduces the case and Joe explains the
                forensic science. Mostly though, it's bants and beer.
              </Description>
            </TextContainer>
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
