import React from 'react'
import styled from 'styled-components'
import data from '../assets/web-port-data'
import Card from './card'

const Section = styled.div`
  background-color: white;
  padding: 40px;
  font-size: 18px;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    padding:10px;
  }
`

const PortWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const DevPortfolio = () => {
  return (
    <Section>
    <Text />
    <PortWrap>
      {data.map((data, index) => {
        return <Card key={index} data={data}/>
      })}
    </PortWrap>

    </Section>
  )
}

export default DevPortfolio

const StyledText = styled.div`
  max-width: 1200px;
  align-self: center;
  line-height: 30px;

  h1 {
    text-align: center;
    padding: 2rem;
  }
  h2 {
    text-align: center;
    padding-top: 30px;
  }

  @media(max-width:768px){
    margin: 0;
  }
`

const Text = () => {
  return (
    <StyledText id="devPort">
    <h1>Front End Development</h1>
      <p>I have been the front end developer at Technology Therapy since January 2018 creating business websites, online marketing games and helping to develop a custom proprietary CMS system called Stella.
      </p>
      <p>
      My work has been primarily in a javascript based environment having produced web applications in React.JS, Vue.JS and Gatsby.JS frameworks with Node backends and GraphQL connection and styling with the css framework Tailwind and CSS-in-JS model with Styled-components. I am currently co-architecting a modular, package based system based on the JAM Stack (Javascript Api Markdown) to quickly build and deploy secure, performant web applications with high SEO.
      </p>
      <p>
      I have been building and designing websites since 2002 with visual editing software, starting with Adobe GoLive and later Adobe Muse, within the arts community, due to my background as  a fine photographer and artist. I changed my focus to programming in 2016 while maintaining business as an art dealer and as a stay-at-home parent. My earlier work experiences both as a chef and in various capacities in the arts has benefited my work in development: I am quickly able to see both the large scale vision of a project and to break one down into manageable tasks and goals while maintaining the purpose and goal of the project.
      </p>
      <br />
      <hr/>
      <h2>Select Projects</h2>
      <br />
    </StyledText>
  )
}
