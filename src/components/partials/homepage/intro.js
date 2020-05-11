/**
 * Intro component
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata

  return (
    <section class="intro">
      <h1 class="visuallyhidden">{author.name} - {author.summary}</h1>
      <div class="intro__logo-container">
        <svg
          version="1.1"
          viewBox="-1 -1 120 146"
          width="120"
          height="146">
          <path
            class="logo"
            d="m 99.96281,113.19996 v 26.70874 2.65193 c 0,0.56827 0.47356,0.94711 0.94711,0.94711 h 16.19573 v 0 c 0.56827,0 0.94712,-0.47356 0.94712,-0.94711 V 139.9087 61.960853 c 0,-0.0947 0,-0.0947 0,-0.0947 C 118.14747,-0.54895236 59.047298,0.49287784 59.047298,0.49287784 v 0 0 c 0,0 -57.7742149,-1.0418302 -59.10018041,59.28960316 v 0 82.778149 c 0,0.56827 0.47355913,0.94711 0.94711827,0.94711 H 36.316459 c 25.761618,0.0948 48.68188,-11.74427 63.646351,-30.30778 z M 36.411171,125.41778 H 18.131789 V 61.866142 c 0,0 0,-0.757695 0.09471,-1.988948 0.568272,-8.429354 5.209151,-41.199646 40.820798,-41.199646 v 0 0 c 40.915523,0 40.915523,43.188594 40.915523,43.188594 0,35.043377 -28.413561,63.551638 -63.551649,63.551638 z" />
        </svg>
      </div>
    </section>
  )
}

export default Intro
