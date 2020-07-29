import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/partials/blog-list"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const classes = "container container--small margin-bottom-32"

  return (
    <Layout location={location} title={siteTitle} classes={classes}>
      <SEO title="Blog" />
      <h1 class="text-align-center">
        Blog
      </h1>
      <hr/>
      <BlogList
        blogs={posts}
      />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { 
          collection: { eq: "blog" },
          draft: { eq: false }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
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
`
