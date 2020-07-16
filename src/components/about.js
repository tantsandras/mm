
import React from "react"
import styled from "styled-components"
import { UserMd, UserAstronaut } from "@styled-icons/fa-solid"

const About = () => (
  <>
    <Container>
      <Description>
        <Name>Midweek Murders</Name>
        <Divider> </Divider>
        <Slogan style={{ color: `#5f728c` }}>A true crime comedy podcast</Slogan>
        <Text style={{ color: `#E5E5E5` }}>
          Based in the UK, new episodes every Wednesday. Midweek Murders is a
          fully independent podcast. Created, produced and edited by the hosts.
        </Text>
      </Description>
      <Description>
        <Name>Hosts</Name>
        <Divider> </Divider>
        <Slogan style={{ color: `#5f728c` }}>Sandra & Joe</Slogan>
      </Description>
      <Card>
        <ProfileAvatar>
          &#x2B22;
          <UserMd
            size="65"
            color="#E5E5E5"
            style={{
              transform: `translateY(-126px)`,
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
            size="65"
            color="#E5E5E5"
            style={{
              transform: `translateY(-126px)`
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

const ProfileAvatar = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translateY(-90px);
  font-size: 250px;
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
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  padding-bottom: 40px;
  margin: 6rem 2rem 6rem 2rem;
  background-color: #E5E5E5;
  padding-top: 80px;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`

const Name = styled.h2`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: #5f728c;
  padding-top: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
`


const HostName = styled(Name)`
transform: translateY(-224px);
margin-bottom: -208px;
padding-bottom: 56px;
letter-spacing: 0.1em;
text-transform: uppercase;
text-align: center;
z-index: 5;
-webkit-text-fill-color: transparent;
letter-spacing: 4px;
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: white;
text-shadow: 2px 2px #d22d4c, 3px 3px #1e1c3c;
`

const DarkDivider = styled.div`
position: relative;
height: 1px;
&:before {
	content: "";
	position: absolute;
	top: -20px;
	left: 0%;
	right: 0%;
	width: 100%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, #1e1c3c, transparent);
}
`

const Slogan = styled.h3`
  color: #1e1c3c;
  margin-top: -16px;
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`
const Text = styled.p`
  color: #1e1c3c;
  font-size: 0.85rem;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
`

export default About
