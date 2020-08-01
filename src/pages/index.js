import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/partials/homepage/intro"
import About from "../components/partials/homepage/about"
import Work from "../components/partials/homepage/work"
import BlogList from "../components/partials/blog-list"

const PortfolioIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <Intro />
      <About />
      <Work
        work={data.work.edges}
      />
      <section class="margin-top-64">
        <div class="container container--small">
          <h2 class="text-align-center">
            <Link to="/blog">
              Blog
            </Link>
          </h2>
          <hr/>
          <BlogList
            blogs={data.blogs.edges}
          />
        </div>
      </section>
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
    work: allMarkdownRemark(
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
                fluid(maxWidth: 550) {
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
            link_document_copy
            link_document_link {
              publicURL
            }
            description
          }
        }
      }
    }
    blogs: allMarkdownRemark(
      filter: {
        fields: { 
          collection: { eq: "blog" },
          draft: { eq: false }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;