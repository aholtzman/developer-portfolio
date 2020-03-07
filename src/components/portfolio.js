import React from 'react'
import styled from 'styled-components'
import data from '../assets/web-port-data'
import Card from './card'
import Stack from './stack'

const Section = styled.div`
  background-color: white;
  padding-top: 40px;
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


    </Section>
  )
}

// <PortWrap>
//   {data.map((data, index) => {
//     return <Card key={index} data={data}/>
//   })}
// </PortWrap>

export default DevPortfolio

const StyledText = styled.div`
  max-width: 960px;
  align-self: center;
  line-height: 30px;
  margin:auto;

  h1 {
    text-align: center;
    padding: 2rem;
  }

  @media(max-width:768px){
    margin: 0;
  }
`

const Text = () => {
  return (
    <div css={`text-align:center;margin:auto;`}>
    <StyledText id="devPort">
    <h1>Front End Development</h1>
      <p>Currently a Senior Web Developer at Brown University in Providence, RI.
      </p>
      <p>
      I work primarily in a javascript based environments utilizing React, Gatsby, React Native and Vue frameworks with Node backends and GraphQL connection and CSS-in-JS model with Styled-Components.
      </p>
    </StyledText>
    <br /><br />
    <Stack />

    </div>
  )
}

// <br />
// <h2 style={{textAlign:'center'}}>Select Projects</h2>
// <br />
