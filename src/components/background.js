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
0% {
  filter: opacity(0%);
}
40% {
  filter: opacity(40%);
}
100% {
  filter: opacity(100%);
}
`

const turnVisible2 = keyframes`
0% {
  opacity: 0;
}
40% {
  opacity: 0.4;
}
100% {
  opacity: 1;
}
`

const Title = styled.h1`
  font-size: 6rem;
  font-family: "Oswald", sans-serif;
  width: 100%;
  letter-spacing: 0.05em;
  position: absolute;
  text-align: center;
  // padding-left: 20px;
  left: 0;
  top: 4%;
  text-transform: uppercase;
  font-weight: 400;
  z-index: 4;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: #d32c4c;
  text-shadow: 2px 2px #e5e5e5, 4px 4px #1e1c3c;
  animation: ${turnVisible2} 1s ease-in;
  @media only screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`
const Card = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 40vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100%;
  height: auto !important;
  align-items: center;
  background-color: #fffafa;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const Thumbnail = styled.div`
  transform: translateY(-40px);
  margin-bottom: -20px;
  height: 200px;
  width: 210px;
  margin-left: 20px;
  margin-right: 20px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 60px 0px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`

const TextContainer = styled.div`
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  padding-bottom: 1.8rem;
  margin-top: 1.8rem;
  height: auto;
`

const PodTitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1e1c3c;
`

const Description = styled.p`
  text-align: left;
  padding-top: 10px;
  font-size: 0.85rem;
  color: #1e1c3c;
  font-family: "Montserrat", sans-serif;
`

const Icons = styled.span`
  z-index: 6;
  padding-bottom: 20px;
  margin: 0 auto;
`

const Icon = styled.a`
  display: inline;
  padding-right: 40px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #1e1c3c;
    cursor: pointer;
  }
`

const StyledBackground = styled(BackgroundImage)`
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 96vh;
  -webkit-box-shadow: inset 10px 10px 93px 0px rgba(0, 0, 0, 0.95);
  -moz-box-shadow: inset 10px 10px 93px 0px rgba(0, 0, 0, 0.95);
  box-shadow: inset 10px 10px 93px 0px rgba(0, 0, 0, 0.95);
  animation: ${turnVisible} ease-in 1.4s forwards;
  @media only screen and (max-width: 1030px) {
    // margin-right: -100px;
    height: 70vh;
    top: 0;
    right: 0;
  }
  @media only screen and (max-width: 480px) {
    height: 60vh;
    top: 0;
    right: 0;
    // margin-right: -80px;
  }
`
const ArrowUp = styled.div`
  height: 100px;
  margin-top: -98px;
  margin-bottom: 80px;
  &:before {
    content: "";
    position: absolute;
    left: 0px;
    width: 50%;
    height: 100px;
    background: linear-gradient(to right bottom, transparent 49%, #1e1c3c 50%);
  }
  &:after {
    content: "";
    position: absolute;
    right: 0px;
    width: 50%;
    height: 100px;
    background: linear-gradient(to left bottom, transparent 49%, #1e1c3c 50%);
  }
`

const DarkDivider = styled.div`
  position: relative;
  height: 1px;
  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: -5%;
    right: 0%;
    width: 110%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      #1e1c3c,
      transparent
    );
  }
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Untitled design(26).png" }) {
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
            alt="Cracks in blue."
          ></StyledBackground>

          <Title>Midweek Murders</Title>
          <ArrowUp> </ArrowUp>
          <Card>
            <Thumbnail>
              <Logo />
            </Thumbnail>
            <Icons>
              <Icon
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fembed.sounder.fm%2Fplay%2F42429"
                aria-label="Share on twitter"
              >
                <TwitterWithCircle size="30" aria-hidden="true" />
              </Icon>
              <Icon
                className="fb-share-button"
                href="https://www.facebook.com/sharer/sharer.php?u=https://embed.sounder.fm/play/42429"
                aria-label="Share on facebook"
              >
                <FacebookCircle size="30" aria-hidden="true" />
              </Icon>
              <Icon
                href="https://embed.sounder.fm/play/42429"
                aria-label="Link to embed this episode"
                style={{ paddingRight: `0px` }}
              >
                <Share size="30" aria-hidden="true" />
              </Icon>
            </Icons>
            <AudioPlayer url="https://embed.sounder.fm/play/42429" />
            <TextContainer>
              <PodTitle>Trailer</PodTitle>
              <DarkDivider> </DarkDivider>
              <Description>
                Midweek Murders is a True Crime Comedy podcast based in the UK
                made by Sandra and Joe. They talk about one case each week,
                where Sandra introduces the case and Joe explains the forensic
                science. Mostly though, it's bants and beer.
              </Description>
            </TextContainer>
          </Card>
        </>
      )
    }}
  />
)

export default BackgroundSection
