import React from "react"
import styled from "styled-components"
import { UserMd, UserAstronaut } from "@styled-icons/fa-solid"
import Wrapper from "./wrapper"
import Article from "./article"

const About = () => (
  <Wrapper>
    <Article name="Midweek Murders" slogan="A true crime comedy podcast">
      <Text style={{ color: `#E5E5E5` }}>
        New episodes every other Wednesday. Midweek Murders is a True Crime
        Comedy podcast based in the UK made by Sandra and Joe. They talk about
        one case every episode, where Sandra introduces the case and Joe
        explains the forensic science. Mostly though, it's bants and beer.
        Midweek Murders is a fully independent podcast. Created, produced and
        edited by the hosts.
      </Text>
    </Article>
    <Article name="Hosts" slogan="Sandra & Joe" />
    <Card>
      <ProfileAvatar>
        &#x2B22;
        <UserMd
          size="65"
          color="#fffafa"
          style={{
            transform: `translateY(-132px)`,
          }}
        />
      </ProfileAvatar>
      <HostName>Joe</HostName>
      <DarkDivider> </DarkDivider>
      <Slogan>#notadoctor </Slogan>
      <Text>
        Joe is a grumpy old man kind of guy despite not being especially old.
        His likes are whisky and dogs, not people. He got roped into starting
        the podcast because of his degree in Forensic Science.
      </Text>
    </Card>
    <Card>
      <ProfileAvatar>
        &#x2B22;
        <UserAstronaut
          size="63"
          color="#fffafa"
          style={{
            transform: `translateY(-132px)`,
          }}
        />
      </ProfileAvatar>
      <HostName>Sandra</HostName>
      <DarkDivider> </DarkDivider>
      <Slogan>Cats and carbs</Slogan>
      <Text>
        Sandra is a more insane version of Joe, with a lot more technical
        know-how and a lot less insight in Forensic Science. Her interests
        includes the interwebz, pubs and Joe's dog Ollie.
      </Text>
    </Card>
  </Wrapper>
)

const ProfileAvatar = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translateY(-110px);
  font-size: 260px;
  z-index: 0;
  color: #1e1c3c;
`

const Card = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  width: 300px;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  padding-bottom: 40px;
  margin: 4% 2rem 6rem 2rem;
  background-color: #fffafa;
  padding-top: 80px;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const HostName = styled.h2`
  font-family: "Oswald", sans-serif;
  padding-top: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
  transform: translateY(-254px);
  margin-bottom: -232px;
  padding-bottom: 56px;
  text-transform: uppercase;
  text-align: center;
  z-index: 5;
  letter-spacing: 0.1em;
  color: #d32c4c;
`

const DarkDivider = styled.div`
  position: relative;
  height: 0.8px;
  &:before {
    content: "";
    position: absolute;
    top: -14px;
    left: 0%;
    right: 0%;
    width: 100%;
    height: 0.8px;
    background-image: linear-gradient(
      to right,
      transparent,
      #1e1c3c,
      transparent
    );
  }
`

const Slogan = styled.h3`
  color: #1e1c3c;
  margin-top: -12px;
  font-size: 0.95rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`
const Text = styled.p`
  color: #1e1c3c;
  font-size: 0.85rem;
  text-align: left;
  font-family: "Montserrat", sans-serif;
`

export default About
