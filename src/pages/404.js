import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`

const Intro = styled.article`
  flex-basis: 70%;
  margin: 4% 15% 6% 15%;
`

const Name = styled.h2`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding-top: 12px;
  color: #5f728c;
`
const Divider = styled.div`
position: relative;
height: 1px;
&:before {
	content: "";
	position: absolute;
	top: -20px;
	left: -10%;
	right: 0%;
	width: 120%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, #e5e5e5, transparent);
}

`

const Text = styled.p`
  flex-direction: row;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`

const Thumbnail = styled.div`
  top: 40px;
  position: relative;
  height: auto;
  width: 70%;
  display: block;
  overflow: hidden;
  margin: 0 auto;
`


const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container>
      <Intro>
        <Name>NOT FOUND</Name>
        <Divider> </Divider>
        <Text>I don't know what you're looking for, but somewhere along the way you've taken a wrong turn. Here lies only emptiness.</Text>
        <Thumbnail><img src="https://i.imgflip.com/1c1uej.jpg" alt="Pablo Escobar looking lonely." style={{ width: `100%`, height: `100%` }} /></Thumbnail>

      </Intro>
      <AniLink style={{ textDecoration: `none`, color: `#E5E5E5`, textTransform: `uppercase`, letterSpacing: `0.05em`, }}
        swipe direction="left" to="/"
        aria-label="Back to home page"
      >

        <LeftArrowCircle size="30" color="#5f728c" aria-hidden="true" style={{ marginRight: `6px`, marginBottom: `4px` }} />
        Take me back!</AniLink>

    </Container>
  </>
)

export default NotFoundPage
