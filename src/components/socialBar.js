import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 500px) {
    margin: 0;
    margin-top: 10px;
  }
`

const SocialImg = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;

  &:hover {
    opacity: .7;
  }
`

const SocialBar = () => {
  return (
    <Container>
      <a href='https://github.com/aholtzman' target='_blank' rel="noopener noreferrer">
        <SocialImg src={require('../images/githublogo.png')} />
      </a>
      <a href='https://www.linkedin.com/in/adam-holtzman-8b27b245/' target='_blank' rel="noopener noreferrer" >
        <SocialImg src={require('../images/Linkedinlogo.png')} />
      </a>
      <a href='https://www.instagram.com/adam.holtzman/' target='_blank' rel="noopener noreferrer" >
        <SocialImg src={require('../images/instagram.png')} />
      </a>
    </Container>
  )
}

export default SocialBar
