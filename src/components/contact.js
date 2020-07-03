
import React from "react"
import styled, { keyframes } from "styled-components"
import {
  TwitterWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social"
import Image from "./getInTouch"

const Contact = () => (
  <>
    <Container>
      <Thumbnail>
        <Image />
      </Thumbnail>
      <Description>
        <Name>Email</Name>
        <Slogan>midweekmurders@gmail.com</Slogan>
        <Text>
          Send us your true crime stories, interesting headlines, or case
          suggestions.
        </Text>
      </Description>
      <Description>
        <Name>Twitter</Name>

        <Slogan>@midweekmurders</Slogan>
        <Text>
          <SocialLink
            href="https://twitter.com/midweekmurders/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterWithCircle
              size="30"
              style={{ marginBottom: `4px`, marginRight: `8px` }}
            />
          </SocialLink>
          Social media ain't our thing, but feel free to try.
        </Text>
      </Description>
      <Description>
        <Name>Instagram</Name>
        <Slogan>@midweekmurders</Slogan>
        <Text>
          <SocialLink
            href="https://www.instagram.com/midweekmurders/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramWithCircle
              size="30"
              style={{ marginBottom: `4px`, marginRight: `8px` }}
            />
          </SocialLink>
          There might be photos of Ollie (the dog) or Bodil (the cat) on here,
          but no promises.
        </Text>
      </Description>
    </Container>
  </>
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
  top: -20px;
  left: 80px;
  height: 176px;
  display: block;
  width: 158px;
  overflow: hidden;
  animation: ${turnVisible} 0.6s ease-in;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`
const Description = styled.article`
  flex-basis: 70%;
  margin: 4% 15%;
`

const Name = styled.h2`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  border-bottom: 0.2px solid #E5E5E5;
  padding-top: 12px;
  font-weight: 600;
  padding-bottom: 6px;
  color: #5f728c;
`

const Slogan = styled.h3`
  color: #5f728c;
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-top: -20px;
`
const SocialLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`
const Text = styled.p`
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`

export default Contact
