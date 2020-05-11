/**
 * Work component
 */

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Work = ({ work }) => {
  const isOdd = function(value) {
    return value % 2;
  }

  return (
    <section id="projects">
      <h2 class="title-tabs color-white" id="work-tab">
        Work
      </h2>
      <div id="project-container">
        {work.map(({ node }, index) => {
          const title = node.frontmatter.title
          const image_url = node.frontmatter.image_url
          const image_alt = node.frontmatter.image_alt

          // Float image right if off
          const project_image_order = isOdd(index) ? 'project--image-right' : '';

          return (
            <article class={'project ' + project_image_order}>
              {/* Make sure image size is exact */}
              {/* <img alt="PL360 Preview" class={image_float} src={image_url.publicURL} title="PL360 Preview"/> */}
              <Img 
                sizes={image_url.childImageSharp.fluid} 
                imgStyle={{ objectFit: 'contain' }}
                alt={image_alt} 
                className={`${image_url.childImageSharp.fluid.aspectRatio}`}
                />
              {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
              <section class="project-text">
                <h3>
                  {title}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description,
                  }}
                />
                <LinkSection 
                  node={node}
                />
              </section>
            </article>
          )
        })}
      </div>
    </section>
  )
}

const LinkSection = ({ node }) => {
  const link_1_copy = node.frontmatter.link_1_copy
  const link_1_link = node.frontmatter.link_1_link
  const link_2_copy = node.frontmatter.link_2_copy
  const link_2_link = node.frontmatter.link_2_link

  if (link_2_link) {
    return (
      <div>
        <Link to={link_1_link}>
          {link_1_copy}
        </Link>
        <Link to={link_2_link}>
          {link_2_copy}
        </Link>
      </div>
    )
  } 
  else {
    return (
      <div>
        <Link to={link_1_link}>
          {link_1_copy}
        </Link>
      </div>
    )
  }
}

export default Work