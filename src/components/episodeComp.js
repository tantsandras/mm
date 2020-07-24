import React from "react"
import PageContainer from "./container"
import styled from "styled-components"
import AudioPlayer from "./useAudioPlayer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"
import Article from "./article"


const Text = styled.p`
  flex-direction: row;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  
`

const ImageWrapper = styled.div`
max-width: 100%;
margin: 0 auto;
text-align: center;
padding: 40px 0px 40px 0px;
`


const EpisodeComp = ({ episode, html }) => {
  const { title, serial, number, date, month, images } = episode
  return (

    <PageContainer header={serial}>

      <Article name={title} slogan={`${date} ${month}`}>

        {images.map(
          img => (
            <ImageWrapper>
              <img src={img.image} alt={img.alt} />
            </ImageWrapper>
          )
        )}
        <Text dangerouslySetInnerHTML={{ __html: html }} />
        <ImageWrapper>
          <AudioPlayer url={`https://embed.sounder.fm/play/${number}`} />
        </ImageWrapper>

      </Article>


      <AniLink style={{ textDecoration: `none`, color: `#E5E5E5`, textTransform: `uppercase`, letterSpacing: `0.05em`, marginBottom: `200px` }}
        swipe direction="left" to="/episodes"
        aria-label="Back to episodes page"
      >
        <LeftArrowCircle size="30" color="#5f728c" aria-hidden="true" style={{ marginRight: `6px`, marginBottom: `4px` }} />
        Back to episodes</AniLink>
    </PageContainer>
  )
}



export default EpisodeComp