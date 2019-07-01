import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import SocialBar from './socialBar'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Quicksand');

  body {
    font-family: 'Quicksand', sans-serif;
    background-color: white;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration:none;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyle />
        <div>
          <main>{children}</main>
          <Footer>
            <SocialBar />
          </Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Footer = styled.footer`
  display: flex;
  justify-content: end;
  background-color: #272727;
  padding: 10px;
  align-items: end;
`

export default Layout
