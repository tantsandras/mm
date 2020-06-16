import { Link } from "gatsby"
import PropTypes from "prop-types"
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
          Send us your true crime stories, interesting headlines, or
          suggestions.
        </Text>
      </Description>
      <Description>
        <Name>Twitter</Name>

        <Slogan>@midweekmurders</Slogan>
        <Text>
          <TwitterWithCircle
            size="34"
            color="#e62347"
            style={{ marginBottom: `4px`, marginRight: `4px` }}
          />{" "}
          Social media ain't our thing, but feel free to try.
        </Text>
      </Description>
      <Description>
        <Name>Instagram</Name>

        <Slogan>@midweekmurders</Slogan>
        <Text>
          <InstagramWithCircle
            size="34"
            color="#e62347"
            style={{ marginBottom: `4px`, marginRight: `4px` }}
          />{" "}
          There might be photos of Ollie (the dog) or Bodil (the cat) on here,
          but no promises.
        </Text>
      </Description>
    </Container>
  </>
)

const Thumbnail = styled.div`
  position: relative;
  top: -20px;
  left: 80px;
  height: 200px;
  width: 160px;
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`
const Description = styled.article`
  flex-basis: 60%;
  margin: 4% 16%;
`

const Name = styled.h2`
  font-family: Oswald;
  text-transform: uppercase;
  border-bottom: 1px solid #100b2b;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #100b2b;
`

const Slogan = styled.h3`
  color: #100b2b;
  margin-top: -20px;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
`
const Text = styled.p`
  color: #100b2b;
  font-size: 18px;
  text-align: left;
`

export default Contact
