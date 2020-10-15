import React from "react"
import styled, { keyframes } from "styled-components"
import {
  TwitterWithCircle,
  InstagramWithCircle,
  YoutubeWithCircle,
} from "@styled-icons/entypo-social"
import Image from "./getInTouch"
import Wrapper from "./wrapper"
import Article from "./article"

const Contact = () => (
  <Wrapper>
    <Thumbnail>
      <Image />
    </Thumbnail>
    <Article name="Email" slogan="midweekmurders@gmail.com">
      <Text>
        Send us your true crime stories, interesting headlines, or case
        suggestions.
      </Text>
    </Article>
    <Article name="Twitter" slogan="@midweekmurders">
      <Text>
        <SocialLink
          href="https://twitter.com/midweekmurders/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Twitter"
        >
          <TwitterWithCircle
            size="22"
            style={{ marginRight: `8px`, transform: `translateY(-1.5px)` }}
            aria-hidden="true"
          />
        </SocialLink>
        Follow us on Twitter to hear snippets of new episodes and more.
      </Text>
    </Article>
    <Article name="Instagram" slogan="@midweekmurders">
      <Text>
        <SocialLink
          href="https://www.instagram.com/midweekmurders/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <InstagramWithCircle
            size="22"
            style={{ marginRight: `8px`, transform: `translateY(-1.5px)` }}
            aria-hidden="true"
          />
        </SocialLink>
        There are photos of Ollie (the dog) and Bodil (the cat) on here, come say hi!
      </Text>
    </Article>
    <Article name="YouTube" slogan="Midweek Murders">
      <Text>
        <SocialLink
          href="https://www.youtube.com/channel/UCqJw512scIqd_a56nUxY2Vw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe on YouTube"
        >
          <YoutubeWithCircle
            size="22"
            style={{ marginRight: `8px`, transform: `translateY(-1.5px)` }}
            aria-hidden="true"
          />
        </SocialLink>
        Midweek Murders is now on YouTube as well. In case you want to, I don't
        know, listen on YouTube?
      </Text>
    </Article>
  </Wrapper>
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
  top: -10px;
  left: 6%;
  height: auto;
  display: block;
  filter: opacity(86%);
  width: 40%;
  min-width: 300px;
  overflow: hidden;
  animation: ${turnVisible} 0.6s ease-in;
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
  color: #e5e5e5;
  font-size: 0.85rem;
  text-align: left;
  font-family: "Montserrat", sans-serif;
`

export default Contact
