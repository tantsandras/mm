import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Wrapper from "../components/wrapper"
import Article from "../components/article"


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
    <Wrapper>
      <Article name="Not found">
        <Text>I don't know what you're looking for, but somewhere along the way you've taken a wrong turn. Here lies only emptiness.</Text>
        <Thumbnail><img src="https://i.imgflip.com/1c1uej.jpg" alt="Pablo Escobar looking lonely." style={{ width: `100%`, height: `100%` }} /></Thumbnail>

      </Article>
      <AniLink style={{ textDecoration: `none`, color: `#E5E5E5`, textTransform: `uppercase`, letterSpacing: `0.05em`, }}
        swipe direction="left" to="/"
        aria-label="Back to home page"
      >

        <LeftArrowCircle size="30" color="#5f728c" aria-hidden="true" style={{ marginRight: `6px`, marginBottom: `4px` }} />
        Take me back!</AniLink>

    </Wrapper>
  </>
)

export default NotFoundPage
