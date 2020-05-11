import React from "react"
import { graphql } from "gatsby"

import Intro from "../components/partials/homepage/intro"
import About from "../components/partials/homepage/about"
import Work from "../components/partials/homepage/work"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <Intro />
      <About />
      <Work
        work={data.allMarkdownRemark.edges}
      />
    </Layout>
  )
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "work" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image_url {
              publicURL
              childImageSharp {
                fluid(maxWidth: 450) {
                  sizes
                  aspectRatio
                  src
                  srcSet
                }
              }
            }
            image_alt
            link_1_copy
            link_1_link
            link_2_copy
            link_2_link
            description
          }
        }
      }
    }
  }
`;