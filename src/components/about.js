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
        <Slogan>A true crime comedy podcast</Slogan>
        <Text>
          Based in the UK, new episodes every Wednesday. Midweek Murders is a
          fully independent podcast. Created, produced and edited by the hosts.
        </Text>
      </Description>
      <Description>
        <Name>Hosts</Name>
        <Slogan>Sandra & Joe</Slogan>
      </Description>
      <Card>
        <ProfileAvatar>
          &#x2B22;
          <UserMd
            size="60"
            color="#282d50"
            style={{
              position: `absolute`,
              top: `20px`,
              left: `50%`,
              marginLeft: `20px`,
            }}
          />
        </ProfileAvatar>
        <Name style={{ marginTop: `60px` }}>Joe</Name>
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
            size="60"
            color="#282d50"
            style={{
              position: `absolute`,
              top: `20px`,
              left: `50%`,
              marginLeft: `20px`,
            }}
          />
        </ProfileAvatar>
        <Name style={{ marginTop: `60px` }}>Sandra</Name>
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
  flex-basis: 60%;
  margin: 4% 16%;
`

const ProfileAvatar = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 230px;
  color: #5f728cb3;
  mix-blend-mode: multiply;
  position: relative;
`

const Card = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  width: 300px;
  height: 600px;
  padding: 2rem;
  margin: 2rem 2rem 6rem 2rem;
  background-color: #fff;
  padding-top: 80px;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const Name = styled.h2`
  font-family: Oswald;
  text-transform: uppercase;
  border-bottom: 1px solid #282d50;
  padding-top: 12px;
  padding-bottom: 6px;
  color: #282d50;
  font-weight: 600;
`

const Slogan = styled.h3`
  color: #1e1c3c;
  margin-top: -20px;
  font-size: 1rem;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
`
const Text = styled.p`
  color: #1e1c3c;
  font-size: 1rem;
  text-align: left;
  font-family: Montserrat;
`

export default About
