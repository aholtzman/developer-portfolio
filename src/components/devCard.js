import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../assets/colors'

const Card = styled.div`
  background-color: transparent;
  width: 25%;
  height: 250px;
  perspective: 1000px;
  margin:1rem;

  @media(max-width: 768px) {
    width: 90vw;
    margin: 10px;
  }
`

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => props.show ? 'rotateY(180deg)' : ''};
`

const Base = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display:flex;
  justify-content:center;
  flex-direction:column;
`

const CardFace = styled(Base)`
  background-color: #272727;
  color: white;
  font-size: 24px;
`

const CardBack = styled(Base)`
  background-color: ${colors.primaryDark};
  color: white;
  transform: rotateY(180deg);
  font-size:12px;
`

export default ({data}) => {
  const [ show, setShow ] = useState(false)
  function handleClick() {
    setShow(!show)
  }

  return(
    <Card onClick={handleClick}>
    <CardInner show={show}>
      <CardFace>
        <p style={{padding:`1rem`}}>{data.title}</p>
      </CardFace>
      <CardBack>
      <div style={{padding:`1rem`}}>
        <p>{data.year}</p>
        <p>{ data.desc ? `${data.desc}` : `By : ${data.author}`}</p>
        <p>{data.code}</p>
        <p>{data.role}</p>
        <a style={{color:'white', display: data.url ? 'block' : 'none' }} href={data.url} target="_blank" rel="noopener noreferrer">Link</a>
        </div>
    </CardBack>
    </CardInner>
    </Card>
  )
}
