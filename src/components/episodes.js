
import React from "react"
import styled from "styled-components"
import { Spotify } from "@styled-icons/fa-brands"
import { Podcast } from "@styled-icons/fa-solid"
import Stitcher from "../images/blue-stitcher.png"
import { Itunes, Googlepodcasts, Castbox } from '@styled-icons/simple-icons'
import EpisodeCard from "./episodeCard"

const Episodes = () => {

  return (
    <Container>
      <Intro>
        <Name>Midweek Murders</Name>
        <Slogan>A true crime comedy podcast</Slogan>

        <Text>
          If you like what you hear, please rate, reveiw and subscribe (preferably
          on Itunes). Listen here, or on:
        <ul
            style={{
              marginTop: `6px`,
              marginLeft: `0px`,
            }}
          >
            <ListenIcon
              href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Itunes size="26" style={{ transform: `translateY(-4px)`, }} />
              <p style={{ transform: `translateX(-10px)`, fontSize: `0.75rem` }}>
                Itunes
            </p>
            </ListenIcon>
            <ListenIcon
              href="https://open.spotify.com/show/0R3YUEiCHBH1nUonVXTzIZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Spotify size="26" style={{ transform: `translateY(3px)`, }} />
              <p style={{ transform: `translateX(-10px)`, fontSize: `0.75rem` }}>
                Spotify
            </p>
            </ListenIcon>

            <ListenIcon
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9taWR3ZWVrbXVyZGVycy5zb3VuZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Googlepodcasts size="24" style={{ transform: `translateY(-6px)`, }} />
              <p style={{ transform: `translateX(-10px)`, fontSize: `0.75rem` }}>
                Google
            </p>
            </ListenIcon>
            <ListenIcon
              href="https://castbox.fm/channel/Midweek-Murders-id3009183?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=Midweek%20Murders-CastBox_FM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Castbox size="26" style={{ transform: `translateY(-4px)`, }} />
              <p style={{ transform: `translateX(-12px)`, fontSize: `0.75rem` }}>
                Castbox
            </p>
            </ListenIcon>
            <ListenIcon
              href="https://podcasts.apple.com/gb/podcast/midweek-murders/id1518983516"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Podcast size="26" style={{ transform: `translate(-8px, 2px)`, }} />
              <p style={{ transform: `translateX(-14px)`, fontSize: `0.75rem` }}>
                Apple
            </p>
            </ListenIcon>
            <ListenIcon
              href="https://www.stitcher.com/s?fid=544619&refid=stpr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Stitcher}
                style={{
                  transform: `translateY(28px)`,
                  width: `22px`,
                  height: `22px`,
                }}
                alt="Stitcher icon"
              />
              <p style={{ transform: `translateX(-12px)`, fontSize: `0.75rem` }}>
                Stitcher
            </p>
            </ListenIcon>
          </ul>
        </Text>
      </Intro>
      <EpisodeCard
        number="45123"
        date="1"
        month="July"
        serial="03"
        title="The A6 Murder"
        description={`This week, your hosts discuss The A6 Murder, a.k.a the murder of Michael Gregsten and the attempted murder of Valerie Storie. Joe (the lackey sitting in the corner) explains the DNA evidence and Sandra talks about why her mum thinks she has brain damage.`}
      />
      <EpisodeCard
        number="43055"
        date="24"
        month="June"
        serial="02"
        title="The Pimlico Mystery"
        description={`The case discussed is the poisoning of Thomas Edwin Bartlett. Joe
        solves the case using his trusty companion, science, and Sandra
        speculates about how many food items one eats whole without chewing.`}
      />
      <EpisodeCard
        number="42428"
        date="17"
        month="June"
        serial="01"
        title="Russian Spies"
        description={`In this episode Sandra talks about 'bee medicine', Joe explains
        nerve agents, and the case discussed is the Salisbury poisonings,
        a.k.a the attempted murders of Sergei and Yulia Skripal, as well as
        the death of Dawn Sturgess.`}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`
const Intro = styled.article`
  flex-basis: 70%;
  margin: 4% 15%;
`

const Name = styled.h2`
  font-family: Oswald;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 0.5px solid #E5E5E5;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #5f728c;
`

const Slogan = styled.h3`
  color: #5f728c;
  margin-top: -20px;
  font-size: 0.95rem;
  font-family: Montserrat;
  font-weight: 400;
`
const Text = styled.span`
  flex-direction: row;
  color: #E5E5E5;
  font-size: 0.85rem;
  text-align: left;
  font-family: Montserrat;
  line-height: 2;
`

const ListenIcon = styled.a`
  display: inline-block;
  list-style: none;
  padding-right: 6px;
  padding-left: 6px;
  text-decoration: none;
  cursor: pointer;
  color: #5f728c;
  &:hover {
    color: #d22d4c;
  }
`

export default Episodes
