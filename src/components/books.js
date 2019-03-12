import React from 'react'
import styled from 'styled-components'
import data from '../assets/book-data'
import BookPortItem from './bookPortItem'
import { colors } from '../assets/colors'

const Section = styled.div`
  background-color: ${colors.primaryDark};
  padding: 40px;
  color: ${colors.primaryLight};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-conyent: center;
  
  @media(max-width: 768px) {
    padding:10px;
  }
`


const PortWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const BookPortfolio = () => {
  return (
    <Section id="books">
    <Text />
    <PortWrap>
      {data.map(data => {
        return <BookPortItem data={data} key={data.title}/>
      })}
    </PortWrap>
    </Section>
  )
}

export default BookPortfolio

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
    <h1>Fine Art Book Design</h1>
      <p>
      I have been active in producing photography and art books – designing, editing and occasionally publishing many since 2007. In this capacity I have worked with individual artists and galleries to produce limited run projects with a range of roles from fully conceptualizing and producing the finished project to advising and guiding the production to completion.
<br /><br />
Below is a list of projects I have worked on over the years. Please feel free to contact me if you have a project idea would would want to discuss.
      </p>
      <br /><br />
      <hr/>
      <h2>Select Projects</h2>
      <br />
    </StyledText>
  )
}
