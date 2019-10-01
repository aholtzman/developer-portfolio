import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../assets/colors'

const Card = styled.div`
  background-color: transparent;
  width: 25%;
  height: 250px;
  perspective: 1000px;
  margin:1rem;
  cursor: pointer;

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
  background-color: white;
  color: ${colors.primaryDark};
  text-align: left;
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
        <hr />
        <p>{data.code ? 'Stack:' : ''} {data.code}</p>
        <hr style={{display: data.code ? 'block' : 'none'}}/>
        <p>Role: {data.role}</p>
        <a style={{backgroundColor:`${colors.primaryDark}`, color: 'white', padding: '.25rem .5rem',  display: data.url ? 'block' : 'none', textAlign: 'right' }} href={data.url} target="_blank" rel="noopener noreferrer">Link</a>
        </div>
    </CardBack>
    </CardInner>
    </Card>
  )
}
