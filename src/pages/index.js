import React from "react"

import Layout from "../components/layout"
import DevPortfolio from "../components/portfolio"
import BookPortfolio from "../components/books"
import TopSection from "../components/topSection"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Adam Holtzman | Front End Developer" keywords={[`gatsby`, `application`, `react`, `front end`, `developer`, `web`]} />
    <TopSection />
    <DevPortfolio />
    <About />
    <BookPortfolio />
  </Layout>
)

export default IndexPage
