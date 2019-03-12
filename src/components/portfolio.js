import React from 'react'
import styled from 'styled-components'
import data from '../assets/web-port-data'
import DevPortItem from './devPortItem'

const PortWrap = styled.div`
  background-color: #ededed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const DevPortfolio = () => {
  return (
    <PortWrap>

      {data.map(data => {
        return <DevPortItem data={data} />
      })}

    </PortWrap>
  )
}

export default DevPortfolio
