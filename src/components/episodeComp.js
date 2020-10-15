import React from "react"
import styled from "styled-components"
import AudioPlayer from "./useAudioPlayer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LeftArrowCircle } from "@styled-icons/boxicons-regular"
import Article from "./article"
import { Share } from "@styled-icons/entypo"
import { TwitterWithCircle } from "@styled-icons/entypo-social"
import { FacebookCircle } from "@styled-icons/boxicons-logos"


const Text = styled.p`
  flex-direction: row;
  max-width: 100%;
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

const Container = styled.section`
  flex-basis: 100%;
`
const Topics = styled.h5`
color: #E5E5E5;
font-family: 'Oswald', sans-serif;
text-transform: uppercase;
font-weight: 400;
letter-spacing: 0.05em;
margin-top: 40px;
`
const TopicList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 0;
font-size: 0.85rem;
color: #E5E5E5;
margin-top: 40px;
margin-bottom: 100px;
`

const Tag = styled.li`
margin-right: 30px;
`
const Icons = styled.span`
display: flex;
flex-direction: row;
align-content: flex-start;
justify-content: flex-end;
width: 100%;
z-index: 6;
`

const Icon = styled.a`
  padding-left: 30px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
    cursor: pointer;
  }
`


const EpisodeComp = ({ episode, html }) => {
  const { title, number, date, month, images, hashtags } = episode
  return (
    <>

      <Container>
     
        <Article name={title} slogan={`${date} ${month}`}>
        <Icons>
        <Icon
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fembed.sounder.fm%2Fplay%2F${number}`}
          aria-label="Share on twitter"
        >
          <TwitterWithCircle size="26" aria-hidden="true" />
        </Icon>
        <Icon
          className="fb-share-button"
          href={`https://www.facebook.com/sharer/sharer.php?u=https://embed.sounder.fm/play/${number}`}
          aria-label="Share on facebook"
        >
          <FacebookCircle size="26" aria-hidden="true" />
        </Icon>
        <Icon href={`https://embed.sounder.fm/play/${number}`} aria-label="Link to embed this episode">
          <Share size="26" aria-hidden="true" />
        </Icon>
      </Icons>

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
          <Topics>Topics</Topics>
          <TopicList>

            {hashtags.map(
              item => (
                <Tag>
                  {item.tag}
                </Tag>
              )
            )}

          </TopicList>
          <AniLink style={{ textDecoration: `none`, color: `#E5E5E5`, textTransform: `uppercase`, letterSpacing: `0.05em`, fontSize: `1rem` }}
            swipe direction="left" to="/episodes"
            aria-label="Back to episodes page"
          >
            <LeftArrowCircle size="30" color="#5f728c" aria-hidden="true" style={{ marginRight: `6px`, marginBottom: `4px` }} />
            Back to episodes</AniLink>

        </Article>
      </Container>
    </>
  )
}



export default EpisodeComp