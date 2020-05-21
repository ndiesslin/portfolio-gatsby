/**
 * Footer component
 */

import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  var d = new Date();
  var n = d.getFullYear();

  return (
    <footer class="background-color-black">
      <div class="text-align-center padding-16">
        <a class="social social--twitter" href="https://twitter.com/ndiesslin">
          <span class="visuallyhidden">Twitter</span>
        </a>
        <a class="social social--linkedin" href="https://www.linkedin.com/in/nicholasdiesslin">
          <span class="visuallyhidden">Linkedin</span>
        </a>
        <a class="social social--behance" href="https://www.behance.net/diesslin">
          <span class="visuallyhidden">Behance</span>
        </a>
      </div>
      <div class="background-color-white">
        <div class="container display-grid grid-template-columns-1-1">
          <ul class="font-size-14 padding-top-8 padding-bottom-8 margin-0 list-unstyled">
            <li>Nicholas Diesslin {n}</li>
          </ul>
          <ul class="font-size-14 padding-top-8 padding-bottom-8 margin-0 list-unstyled text-align-right">
            <Link to="/blog" class={'margin-right-8 display-inline-block'}>
              blog
            </Link>
            <li class="margin-right-8 display-inline-block">
              <a href="docs/vCard.vcf" target="_blank">
                vCard
              </a>
            </li>
            <li class="margin-right-8 display-inline-block">
              <a href="docs/resume.pdf" target="_blank">
                resume
              </a>
            </li>
            <li class="display-inline-block">
              <a href="docs/documentation.pdf" target="_blank">
                site documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
