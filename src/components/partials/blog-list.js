/**
 * Blog list component
 */

import React from "react"
import { Link } from "gatsby"

const BlogList = ({ blogs }) => {
  return (
    blogs.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <article key={node.fields.slug} class={'margin-bottom-32'}>
          <header>
            <h3 class={'margin-0'}>
              <Link to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            {/* If I ever want to display the date, maybe when I have more posts */}
            {/* <small><em>{node.frontmatter.date}</em></small> */}
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </article>
      )
    })
  )
}

export default BlogList