import React from 'react'
import styled from 'styled-components'

import { colors } from '../assets/colors'

const Item = styled.div`
  width: 40%;
  color:white;
  text-align: center;
  background-color:rgba(0, 0, 0, .15);
  background: linear-gradient(0deg,#272727,rgba(39,39,39,.9) 10%,rgba(39,39,39,.2)) top no-repeat;
  padding:30px;
  margin: 20px;
  border: .5px solid white;
  border-radius: 10px;

  a {
    color: white;
    text-decoration: none;
  }

  p {
    font-size: 18px;
  }

  @media(max-width: 768px) {
    width: 90vw;
    margin: 10px;
  }
`

const DevPortItem = ({data}) => {
  return (
    <Item>
      <h2>{data.title}</h2>
      <br />
      <h3>{data.dates}</h3>
      <br />
      <p>{data.desc}</p>
      <p>{data.code}</p>
      <p>{data.role}</p>
      <br />
      <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url ? 'Visit Site' : ''}</a>
      <br /><br />
    </Item>
  )
}

export default DevPortItem
