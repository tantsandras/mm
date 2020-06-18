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
        <Slogan>Another true crime comedy podcast</Slogan>
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
        <UserMd size="60" color="#282D50" />
        <Name>Joe</Name>
        <Slogan>#notadoctor </Slogan>
        <Text>
          Joe is a grumpy old man kind of guy despite not being especially old.
          His likes are whisky and dogs, not people. He got roped into starting
          the podcast because of his degree in Forensic Science.
        </Text>
      </Card>
      <Card>
        <UserAstronaut size="60" color="#282D50" />
        <Name>Sandra</Name>
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
`
const Description = styled.article`
  flex-basis: 60%;
  margin: 4% 16%;
`

const Card = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  width: 320px;
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
`

const Slogan = styled.h3`
  color: #1e1c3c;
  margin-top: -20px;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
`
const Text = styled.p`
  color: #1e1c3c;
  font-size: 18px;
  text-align: left;
  font-family: Montserrat;
`

export default About
