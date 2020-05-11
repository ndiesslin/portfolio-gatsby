/**
 * Footer component
 */

import React from "react"

const Footer = () => {
  var d = new Date();
  var n = d.getFullYear();

  return (
    <footer>
      <h2 class="title-tabs" id="contact-tab">
        Contact
      </h2>
      <div id="contact">
        <div id="social-icons">
          <a class="social twitter" href="https://twitter.com/ndiesslin">
            <span class="visuallyhidden">Twitter</span>
          </a>
          <a class="social linkedin" href="https://www.linkedin.com/in/nicholasdiesslin">
            <span class="visuallyhidden">Linkedin</span>
          </a>
          <a class="social behance" href="https://www.behance.net/diesslin">
            <span class="visuallyhidden">Behance</span>
          </a>
        </div>
        <form method="post" action="">
          <input class="form-inputs" type="text" required placeholder="name" name="name" id="name" value=""/>
          <input class="form-inputs" type="email" required placeholder="email" name="email" id="email" value=""/>
          <textarea class="form-inputs text-area" required placeholder="message" name="comments" id="message"></textarea>
          <input class="submit" type="submit" name="submit" value="send email"/>
        </form>
      </div>
      <div id="bottom-nav">
        <ul id="bottom-nav-left">
          <li>Nicholas Diesslin {n}</li>
        </ul>
        <ul>
          <li>
            <a href="docs/vCard.vcf" target="_blank">
              vCard
            </a>
          </li>
          <li>
            <a href="docs/resume.pdf" target="_blank">
              resume
            </a>
          </li>
          <li>
            <a href="docs/documentation.pdf" target="_blank">
              site documentation
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
