import React, { useState } from "react"
import styled from "styled-components"
import { Email } from "@styled-icons/entypo"
import { RightArrowCircle } from "@styled-icons/boxicons-regular"
import Article from "./article"


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

const Success = styled.h3`
text-transform: uppercase;
font-weight: 500;
font-family: 'Oswald', sans-serif;
letter-spacing: 0.05em;
text-align: center;
`

const Text = styled.p`
font-family: 'Montserrat', sans-serif;
text-align: center;
font-size: 0.85rem;
`

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
      .then(() => setState({ submitted: true }))
      .catch((error) => alert(error))
  }

  return (
    <section >
      <Article name="Stay in touch" slogan="Want the latest updates?">
      </Article>

      <Form method="post" name="newsletter" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        {!state.submitted ? (
          <>
            <input aria-hidden="true" type="hidden" name="form-name" value="newsletter" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <Label><Email size="17" color="#1e1c3c" aria-hidden="true" style={{ marginRight: `1px`, transform: `translateY(-1.5px)` }} /> Email &#x2a;<br />
              <Input type="email" name="email" placeholder="e.g. jane_doe@gmail.com" style={{ fontSize: `0.75rem` }} required onChange={handleChange} />
            </Label>
            <Button type="submit">
              Sign me up!
    <RightArrowCircle size="24" color="#d22d4c" aria-hidden="true" style={{ marginLeft: `4px`, transform: `translateY(-2.5px)` }} />
            </Button>
          </>
        ) : (
            <>
              <Success>Success!</Success>
              <Text>
                Thank you for signing up! <br />
                We'll keep in touch.
          </Text>
            </>
          )}
      </Form>

    </section >
  )
}

export default Newsletter