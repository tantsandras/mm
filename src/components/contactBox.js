import {
  TwitterWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social"
import React from "react"
import styled from "styled-components"

const Contact = styled.article`
  margin-right: 12%;
  text-align: right;
  flex: 1;
`

const Name = styled.h5`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  padding-bottom: 6px;
  margin-bottom: 0px;
  font-size: 0.85rem;
  letter-spacing: 3px;
  font-weight: 400;
  color: #e5e5e5;
`
const Divider = styled.div`
  position: relative;
  height: 0.8px;
  &:before {
    content: "";
    position: absolute;
    left: -20%;
    right: 0%;
    width: 140%;
    height: 0.8px;
    background-image: linear-gradient(
      to right,
      transparent,
      #e5e5e5,
      transparent
    );
  }
`
const SocialLink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`
const Text2 = styled.p`
  margin-top: 6px;
  color: #e5e5e5;
  line-height: 2.5;
  text-align: right;
  font-family: "Oswald", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
`

const ContactBox = () => (
  <Contact>
    <Name>Contact</Name>
    <Divider> </Divider>
    <Text2>
      <SocialLink
        href="https://twitter.com/midweekmurders/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Twitter"
      >
        <TwitterWithCircle size="22" aria-hidden="true" />
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/midweekmurders/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <InstagramWithCircle size="22" aria-hidden="true" />
      </SocialLink>
      <br />
      midweekmurders@gmail.com
    </Text2>
  </Contact>
)

export default ContactBox
