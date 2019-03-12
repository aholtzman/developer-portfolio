import React from 'react'
import styled from 'styled-components'

import { colors } from '../assets/colors'

const Item = styled.div`
  width: 40%;
  color:dimgrey;
  text-align: center;
  padding:30px;
  margin: 20px;
  background-color: white;
  border-radius: 10px;

  a {
    color: ${colors.primaryDark};
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
      <a href={data.url}>{data.url ? 'Visit Site' : ''}</a>
      <br /><br />
    </Item>
  )
}

export default DevPortItem
