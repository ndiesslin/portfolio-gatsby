/**
 * Work component
 */

import React from "react"
import Img from "gatsby-image"

const Work = ({ work }) => {
  const isOdd = function(value) {
    return value % 2;
  }

  return (
    <section>
      <div class="text-align-center">
        <h2 class="title-tabs background-color-black color-white">
          Work
        </h2>
      </div>
      <div class="container">
        {work.map(({ node }, index) => {
          const title = node.frontmatter.title
          const image_url = node.frontmatter.image_url
          const image_alt = node.frontmatter.image_alt

          // Float image right if off
          const project_image_order = isOdd(index) ? 'project--image-right' : '';

          return (
            <article class={'project grid-column-gap-60 ' + project_image_order}>
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
                <h3 class={'font-family-sanserif'}>
                  {title}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description,
                  }}
                  class={'margin-bottom-32'}
                />
                <LinkSection 
                  node={node}
                />
              </section>
            </article>
          )
        })}
        <hr class={'margin-top-0'}/>
      </div>
    </section>
  )
}

const LinkSection = ({ node }) => {
  const link_1_copy = node.frontmatter.link_1_copy
  const link_1_link = node.frontmatter.link_1_link
  const link_2_copy = node.frontmatter.link_2_copy
  const link_2_link = node.frontmatter.link_2_link
  const link_document_copy = node.frontmatter.link_document_copy
  const link_document_link = node.frontmatter.link_document_link

  // Create link section object
  let link_section = []

  // Append links to object
  if (link_1_link) {
    link_section.push(
      <a href={link_1_link} class={'btn'}>
        {link_1_copy}
      </a>
    )
  }

  if (link_2_link) {
    link_section.push(
      <a href={link_2_link} class={'btn'}>
        {link_2_copy}
      </a>
    )
  }

  if (link_document_link) {
    link_section.push(
      <a href={link_document_link.publicURL} class={'btn'}>
        {link_document_copy}
      </a>
    )
  }

  // Return link section
  return (
    <div>
      {link_section}
    </div>
  )
}

export default Work