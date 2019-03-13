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
    width: 100%;
    margin: 10px;
  }
`

const BookPortItem = ({data}) => {
  return (
    <Item>
      <h2>{data.title} - {data.year}</h2>
      <h3>By {data.author}</h3>
      <h3>{data.publisher}</h3>
      <p>{data.description}</p>
      <p>{data.spec}</p>
      <p>Role: {data.role}</p>
      <br />
      <a href={data.url}>{data.url ? 'View Book Listing' : ''}</a>
      <br /><br />
    </Item>
  )
}

export default BookPortItem
