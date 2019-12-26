import React from 'react'
import styled from 'styled-components'
import { colors } from '../assets/colors'

const Section = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-around;
  background-color: ${colors.primaryLight};
  color:${colors.primaryDark};

  @media(max-width:768px) {
    flex-direction: column;
  }
`

const TextWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  align-self: center;

  p {
    font-size: 20px;
  }
`

export default() => (
    <Section>
      <div>
        <h2>Front End</h2>
        <ul>
        <li>ReactJS</li>
        <li>GatsbyJS</li>
        <li>VueJS</li>
        <li>Web Components</li>
        <li>Styled-Components</li>
        <li>TailwindCSS</li>
        <li>JavaScript ES6+</li>
        <li>HTML5</li>
        <li>CSS3</li>
        </ul>
      </div>
      <div>
        <h2>Middle/API</h2>
        <ul>
        <li>GraphQL</li>
        <li>Apollo</li>
        <li>PostGraphile</li>
        </ul>
      </div>
      <div>
        <h2>Back End</h2>
        <ul>
        <li>NodeJS</li>
        <li>Postgres</li>
        <li>MongoDB</li>
        <li>SQL</li>
        </ul>
      </div>
      <div>
        <h2>Deployment</h2>
        <ul>
        <li>Netlify</li>
        <li>Now</li>
        </ul>
      </div>
      <div>
        <h2>Tech</h2>
        <ul>
        <li>Git</li>
        <li>NPM & Yarn</li>
        <li>JAMstack</li>
        <li>Mac OS</li>
        <li>Adobe Photoshop</li>
        <li>Adobe InDesign</li>
        <li>Adobe Muse</li>
        </ul>
      </div>
    </Section>
  )
