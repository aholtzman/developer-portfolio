import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  width: 40%;
  color:dimgrey;
  text-align: center;
  padding:20px;
  margin:20px;
  background-color: white;
  border-radius: 10px;

  @media(max-width: 768px) {
    width: 100%;
  }
`

const DevPortItem = ({data}) => {
  return (
    <Item>
      <h2>{data.title}</h2>
      <br />
      <p>{data.desc}</p>
      <p>{data.code}</p>
      <p>{data.role}</p>
      <p>{data.url}</p>
      <br />
    </Item>
  )
}

export default DevPortItem
