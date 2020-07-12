import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const pageTitle = post.frontmatter.title
  const pageDescription = post.frontmatter.description || post.excerpt
  const { previous, next } = pageContext
  const classes = "container"
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout location={location} title={siteTitle} classes={classes}>
      <SEO
        title={pageTitle}
        description={pageDescription}
      />
      <article>
        <header class={'text-align-center'}>
          <h1>
            {pageTitle}
          </h1>
          {/* If I ever want to display the date, maybe when I have more posts */}
          {/* <p>
            <em>
              {post.frontmatter.date}
            </em>
          </p> */}
        </header>

        <div class={'container container--small'}>
          <hr/>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <a class="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=${pageDescription}&url=${url}`}>
            Share article on Twitter
          </a>
          
          <hr/>

          <Bio />

          <nav>
            <ul
              class={'blog-nav text-align-center'}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                <Link to="/blog">
                  Back to blog
                </Link>
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
