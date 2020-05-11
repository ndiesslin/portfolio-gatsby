import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioIndex = ({ data, location }) => {
  const siteTitle = "Style Guide"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />

      <div>
        <h2>Colors:</h2>
        <span class="guide-color" style={{backgroundColor: "#323132"}}>#323132</span>
        <span class="guide-color" style={{backgroundColor: "#EFEFEF", color: "#323132"}}>#EFEFEF</span>
        <span class="guide-color" style={{backgroundColor: "#00416A"}}>#00416A</span>
        <span class="guide-color" style={{backgroundColor: "#B7DCEE", color: "#323132"}}>#B7DCEE</span>
      </div>

      <div>
        <h2>Fonts:</h2>
      </div>

      <div>
        <h2>Headings:</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      <div>
        <h2>Links:</h2>
      </div>
    </Layout>
  )
}

export default PortfolioIndex