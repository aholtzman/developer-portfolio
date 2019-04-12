import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import DevPortfolio from "../components/portfolio"
import BookPortfolio from "../components/books"
import TopSection from "../components/topSection"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link rel="preload" as="font" crossorigin="crossorigin" type="font/Quicksand" href="https://fonts.googleapis.com/css?family=Quicksand">
    </Helmet>
    <SEO title="Adam Holtzman | Front End Developer" keywords={[`gatsby`, `application`, `react`, `front end`, `developer`, `web`]} />
    <TopSection />
    <DevPortfolio />
    <About />
    <BookPortfolio />
  </Layout>
)

export default IndexPage
