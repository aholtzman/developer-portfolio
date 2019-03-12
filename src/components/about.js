import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
`

const TextWrap = styled.div`
  max-width: 1200px;
  align-self: center;

  p {
    font-size: 20px;
  }
`

const About = () => {
  return (
    <Section id="about">
    <TextWrap>
      <p>
      I like to make things.
      <br /><br />
      I have been producing photography and art books – designing, editing and intermittently publishing many since 2007.
      <br /><br />
      I am a former chef, curator, gallery owner, publisher and private art dealer among other things.
      <br /><br />
      I am an exhibiting artist (photography and painting).
      <br /><br />
      I also like to make websites and apps with javascript.
      <br /><br />
      I like to make things.
      </p>
      </TextWrap>
    </Section>
  )
}

export default About
