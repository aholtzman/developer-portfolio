import styled from 'styled-components'
import React, { Component } from 'react'
import { colors } from '../assets/colors'

const Container = styled.div`
  margin: 40px;
  width: calc(100vw - 80px;);
  height: calc(100vh - 80px);
  display: flex;
  position: relative;
`

const Left = styled.div`
  width: 60%;
  height: calc(100hv - 80px);
  background-color: ${colors.primaryDark};
  z-index: 2;
  display: flex;
  justify-content: center;
  @media(max-width:768px){
    width: 90%;
  }
`

const Right = styled.div`
  width: 40%;
  height: calc(100hv - 80px);
  background-color: ${colors.primaryLight};
  background-size: cover;

  @media(max-width:768px){
    width: 10%;
  }
`

const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: rgb(70,79,89);
  position: absolute;
  top: calc(50vh - 230px);
  left: calc(50vw - 150px);
  z-index: 1;

  @media(max-width:768px){
    width: 0;
    height:0;
  }
`

const Title = styled.p`
  text-align:right;
  margin:auto;
  width:100%;
  font-size: 40px;
  margin-right: -20px;
  font-weigth: bold;
  color: #fbf2ea;
  letter-spacing: 2px;
  line-height: 30px;

  a {
    color: ${colors.primaryLight};
    text-decoration: none;
  }

  span {
    font-size: 18px;
    font-weight: normal;
    margin-right: 1px;
    align-self: end;
  }
  @media(max-width:768px){
    margin-right: 20px;
  }
`

const RegMark = styled.img`
  position: absolute;
  top: 5px;
  left: 50vw;
  width: 30px;
  height: 30px;
`

const RegMarkLeft = styled(RegMark)`
  left: 5px;
  top: 50vh;
`

const RegMarkRight = styled(RegMark)`
  left: calc(100vw - 35px);
  top: 50vh;
`

const RegMarkBottom = styled(RegMark)`
  top: calc(100vh - 35px);
  z-index: 10;
`
const CropTopLeft = styled.img`
  position: absolute;
  z-index: 3;
  top: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
`

const CropTopRight = styled(CropTopLeft)`
  transform: rotate(90deg);
  left: calc(100vw - 50px);
`

const CropBottomRight = styled(CropTopLeft)`
  transform: rotate(180deg);
  left: calc(100vw - 50px);
  top: calc(100vh - 50px);
`

const CropBottomLeft = styled(CropTopLeft)`
  transform: rotate(-90deg);
  top: calc(100vh - 52px);
`

class TopSection extends Component {
  constructor(props) {
    super(props)
    this.state = { book: 'hidden', art: 'hidden'}
    setTimeout(() => { this.setState({ book: 'visible' }) }, 2000)
    setTimeout(() => { this.setState({ art: 'visible' }) }, 4000)
  }

  render() {
    return (
      <div>
      <RegMark src="https://s3.us-east-2.amazonaws.com/ttg-wordpress/ttg_site_homepage/noun_Registration+Mark_15815.png" />
      <RegMarkLeft src="https://s3.us-east-2.amazonaws.com/ttg-wordpress/ttg_site_homepage/noun_Registration+Mark_15815.png" />
      <RegMarkRight src="https://s3.us-east-2.amazonaws.com/ttg-wordpress/ttg_site_homepage/noun_Registration+Mark_15815.png" />
      <RegMarkBottom src="https://s3.us-east-2.amazonaws.com/ttg-wordpress/ttg_site_homepage/noun_Registration+Mark_15815.png" />
      <CropTopLeft src="https://s3.us-east-2.amazonaws.com/ttg-wordpress/ttg_site_homepage/cropMarks.png" />
      <CropTopRight src="https://s3.us-east-2.amazonaws.com/ttg-wordpress/ttg_site_homepage/cropMarks.png" />
      <CropBottomRight src="https://s3.us-east-2.amazonaws.com/ttg-wordpress/ttg_site_homepage/cropMarks.png" />
      <CropBottomLeft src="https://s3.us-east-2.amazonaws.com/ttg-wordpress/ttg_site_homepage/cropMarks.png" />

      <Container>
        <Circle   />
        <Left>
          <Title><a href="#about">Adam Holtzman</a><br />
          <br /><a href="http://adamholtzman.com" target="_blank" rel="noopener noreferrer" style={{ visibility: this.state.art }}><span>Artist</span></a>
          <br /><a href="#books" style={{ visibility: this.state.book }}><span>Book Designer</span></a>
          <br /><span><a href="#devPort">Front End Developer</a></span>
          </Title>
        </Left>
        <Right />
      </Container>
      </div>
    )
  }



}

export default TopSection
