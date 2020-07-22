import React, { useState } from "react"
import styled from "styled-components"
import { Email } from "@styled-icons/entypo"
import { UserCircle } from "@styled-icons/boxicons-solid"
import { RightArrowCircle } from "@styled-icons/boxicons-regular"
import { navigate } from 'gatsby-link'

const Name = styled.h3`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: #5f728c;
  padding-top: 12px;
  font-weight: 500;
  letter-spacing: 0.05em;
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

const Slogan = styled.h4`
  color: #E5E5E5;
  margin-top: -16px;
  font-size: 0.95rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-bottom: 100px;
`
// const Text = styled.p`
//   color: #1e1c3c;

//   text-align: left;
//   font-family: 'Montserrat', sans-serif;

// `

const SignUp = styled.article`
  flex-basis: 70%;
  margin: 200px 15% 4% 15%;

`
const Input = styled.input`
border-radius: 6px;
margin-top: 4px;
margin-bottom: 1.8rem;
color: #5f728c;
font-family: 'Montserrat', sans-serif;
width: 100%;
border: none;
outline: none;
box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #E5E5E5;
width: 100%;
box-sizing: border-box;
transition: all 0.2s ease-in-out;
appearance: none;
-webkit-appearance: none;
padding: 0.75rem;
&:focus {
  box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #E5E5E5;
}
`

const Button = styled.button`
// margin-top: 1.8rem;
text-transform: uppercase;
font-weight: 500;
border: none;
border-radius: 6px;
outline: none;
background-color: #E5E5E5;
box-sizing: border-box;
transition: all 0.2s ease-in-out;
appearance: none;
-webkit-appearance: none;
padding: 0.75rem;
cursor: pointer;
color: #d22d4c;
font-family: 'Oswald', sans-serif;
letter-spacing: 0.05em;
box-shadow: -5px -5px 20px #E5E5E5,  5px 5px 20px #BABECC;
transition: all 0.4s ease-in-out;
cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #E5E5E5, 2px 2px 5px #BABECC;
    background-color: #1e1c3c;
  }
  
  &:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.75), inset -1px -1px 2px #1e1c3c;
  }
  
`
const Label = styled.label`
font-size: 0.85rem;
font-family: 'Oswald', sans-serif;
color: #1e1c3c;
letter-spacing: 0.05em;
text-transform: uppercase;
font-weight: 500;
`
const Form = styled.form`
padding: 1.8rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;
max-width: 40vw;
min-width: 300px;
margin: 0 auto;
background-color: #E5E5E5;
-webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
-moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
`
// <Label><UserCircle size="22" color="#1e1c3c" aria-hidden="true" style={{ marginRight: `4px`, transform: `translateY(-2px)` }}/>Name <br />
//   <Input type="text" name="name" placeholder="Jane Doe" style={{  fontSize: `0.75rem`}}/>
//   </Label>

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const Newsletter = () => {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
  return (
    <section>
      <SignUp>
        <Name>Want the latest updates?</Name>
        <Divider />
        <Slogan>Sign up for our newsletter</Slogan>
      </SignUp>

      <Form method="post" name="newsletter" action="/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input aria-hidden="true" type="hidden" name="form-name" value="newsletter" />
        <p hidden>
          <label>
            Don’t fill this out: <input aria-hidden="true" name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <Label><Email size="17" color="#1e1c3c" aria-hidden="true" style={{ marginRight: `1px`, transform: `translateY(-1.5px)` }} /> Email &#x2a;<br />
          <Input type="email" name="email" placeholder="e.g. jane_doe@gmail.com" style={{ fontSize: `0.75rem` }} required onChange={handleChange} />
        </Label>
        <Button type="submit">
          Sign me up!
    <RightArrowCircle size="24" color="#d22d4c" aria-hidden="true" style={{ marginLeft: `4px`, transform: `translateY(-2.5px)` }} />
        </Button>
      </Form>
    </section>
  )
}

export default Newsletter