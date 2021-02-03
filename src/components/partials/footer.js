/**
 * Footer component
 */

import React from "react"
import { Link } from "gatsby"

// Import documents
import resume from "../../docs/resume.pdf"
import documentation from "../../docs/documentation.pdf"

const Footer = () => {
  var d = new Date();
  var n = d.getFullYear();

  return (
    <footer class="background-color-black">
      <div class="text-align-center padding-16">
        <a class="social social--twitter" href="https://twitter.com/pizzamannick">
          <span class="visuallyhidden">Twitter</span>
        </a>
        <a class="social social--linkedin" href="https://www.linkedin.com/in/nicholasdiesslin">
          <span class="visuallyhidden">Linkedin</span>
        </a>
        <a class="social social--github" href="https://github.com/ndiesslin">
          <span class="visuallyhidden">Github</span>
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
            <li class="margin-bottom-16 display-inline-block">
              <Link to="/blog">
                blog
              </Link>
            </li>
            <li class="margin-bottom-16 margin-left-24 display-inline-block">
              <Link to={resume}>
                resume
              </Link>
            </li>
            <li class="margin-bottom-16 margin-left-24 display-inline-block">
              <Link to={documentation}>
                documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
