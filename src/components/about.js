import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import { UserMd, UserAstronaut } from "@styled-icons/fa-solid"

const About = () => (
  <>
    <Container>
      <Description>
        <Name>Midweek Murders</Name>
        <Slogan style={{color: `#5f728c`}}>A true crime comedy podcast</Slogan>
        <Text style={{color: `#E5E5E5`}}>
          Based in the UK, new episodes every Wednesday. Midweek Murders is a
          fully independent podcast. Created, produced and edited by the hosts.
        </Text>
      </Description>
      <Description>
        <Name>Hosts</Name>
        <Slogan style={{color: `#5f728c`}}>Sandra & Joe</Slogan>
      </Description>
      <Card>
        <ProfileAvatar>
          &#x2B22;
          <UserMd
            size="50"
            color="#E5E5E5"
            style={{
              transform: `translateY(-140px)`,
            }}
          />
        </ProfileAvatar>
        <HostName>Joe</HostName>
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
            size="50"
            color="#E5E5E5"
            style={{
              transform: `translateY(-140px)`
            }}
          />
        </ProfileAvatar>
        <HostName>Sandra</HostName>
        <Slogan>Cats and carbs</Slogan>
        <Text>
          Sandra is a more insane version of Joe, with a lot more technical
          know-how and a lot less insight in Forensic Science. Her interests
          includes the interwebz, pubs and Joe's dog Ollie.
        </Text>
      </Card>
    </Container>
  </>
)


const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`
const Description = styled.article`
  flex-basis: 70%;
  margin: 4% 15%;
`

const ProfileAvatar = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 270px;
  // color: #5f728c;
  z-index: 0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: white;
  text-shadow: 0.5px 0.5px #5f728c, 5px 5px rgba(0, 0, 0, 0.02);
`

const Card = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  width: 300px;
  height: 500px;
  padding: 2rem;
  margin: 2rem 2rem 6rem 2rem;
  background-color: #E5E5E5;
  padding-top: 80px;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const Name = styled.h2`
  font-family: Oswald;
  text-transform: uppercase;
  color: #5f728c;
  border-bottom: 0.2px solid #E5E5E5;
  padding-top: 12px;
  padding-bottom: 6px;
  font-weight: 600;
`


const HostName = styled(Name)`
border-bottom: 0.5px solid #1e1c3c;
margin-top: -150px;
padding-bottom: 56px;
letter-spacing: 0.1em;
text-transform: uppercase;
text-align: center;
z-index: 2;
-webkit-text-fill-color: transparent;
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: white;
text-shadow: 2px 2px #d22d4c, 4px 4px #1e1c3c;
`

const Slogan = styled.h3`
  color: #1e1c3c;
  margin-top: -20px;
  font-size: 0.95rem;
  font-family: Montserrat;
  font-weight: 400;
`
const Text = styled.p`
  color: #1e1c3c;
  font-size: 0.85rem;
  text-align: left;
  font-family: Montserrat;
`

export default About
