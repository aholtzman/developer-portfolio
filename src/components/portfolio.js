import React from 'react'
import styled from 'styled-components'
import data from '../assets/web-port-data'

const PortWrap = styled.div`
  background-color: red;
  margin:20px;
`

const DevPortfolio = () => {
  return (
    <PortWrap>
    <div>
      {data.map(data => {
        return <p>{data.title}</p>
      })}
      </div>
    </PortWrap>
  )
}

export default DevPortfolio
