import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Intro = styled.article`
  flex-basis: 70%;
  margin: 4% 15%;
`

const Name = styled.h2`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 0.5px solid #E5E5E5;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #5f728c;
`

const Text = styled.p`
  flex-direction: row;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`

const Thumbnail = styled.div`
  position: relative;
  height: auto;
  width: 80%;
  display: block;
  overflow: hidden;
  margin: 0 auto;
`



const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Intro>
      <Name>NOT FOUND</Name>
      <Text>I don't know what you're looking for, but somewhere along the way you've taken a wrong turn. Here lies only emptiness.</Text>
      <Thumbnail><img src="https://i.imgflip.com/1c1uej.jpg" alt="Pablo Escobar looking lonely." style={{ width: `100%`, height: `100%` }} /></Thumbnail>
    </Intro>
  </>
)

export default NotFoundPage
