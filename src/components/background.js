import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image-es5"
import styled, { keyframes } from "styled-components"
import Logo from "./logo"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"
import AudioPlayer from "./useAudioPlayer"

const turnVisible = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const Title = styled.div`
  font-size: 4rem;
  font-family: Oswald;
  width: 100%;
  letter-spacing: 0.1em;
  position: absolute;
  left: 19%;
  top: 13%;
  text-transform: uppercase;
  line-height: 1;
  z-index: 8;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
  text-shadow: 2px 2px #d22d4c, 4px 4px #1e1c3c;
  animation: ${turnVisible} 0.6s ease-in;
`
const Card = styled.div`
  margin-top: 4%;
  margin-bottom: 600px;
  position: relative;
  min-width: 300px;
  max-width: 40vw;
  margin: 0 auto;
  min-height: 100%;
  height: auto !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const Thumbnail = styled.div`
  transform: translateY(-40px);
  height: 260px;
  width: 270px;
  margin-left: 20px;
  margin-right: 20px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
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
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 1px solid #1e1c3c;
  padding-bottom: 6px;
  color: #1e1c3c;
`

const Description = styled.p`
  text-align: left;
  padding-top: 10px;
  font-size: 0.85rem;
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
  color: #5f728ccc;
  &:hover {
    color: #282d50;
  }
`
const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  -webkit-background-attachment: fixed;
  -moz-background-attachment: fixed;
  -o-background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: opacity(30%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-box-shadow: inset 10px 10px 93px 0px rgba(0, 0, 0, 0.95);
  -moz-box-shadow: inset 10px 10px 93px 0px rgba(0, 0, 0, 0.95);
  box-shadow: inset 10px 10px 93px 0px rgba(0, 0, 0, 0.95);
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hello.jpg" }) {
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
          <StyledBackground
            Tag="section"
            className={className}
            fluid={imageData}
            alt="Forest with noir feeling."
          >
            {" "}
          </StyledBackground>
          <Title>Midweek Murders</Title>
          <Card>
            <Thumbnail>
              <Logo />
            </Thumbnail>
            <Icons>
              <Icon
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fembed.sounder.fm%2Fplay%2F42429"
              >
                <TwitterWithCircle size="40" />
              </Icon>
              <Icon
                className="fb-share-button"
                href="https://www.facebook.com/sharer/sharer.php?u=https://embed.sounder.fm/play/42429"
              >
                <FacebookCircle size="40" />
              </Icon>
              <Icon href="https://embed.sounder.fm/play/42429">
                <Share size="40" />
              </Icon>
            </Icons>
            <AudioPlayer url="https://embed.sounder.fm/play/42429" />
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

export default BackgroundSection
