/**
 * Header component
 */

import React from "react"

const Header = ({title}) => {
  return (
    <header class="header">
      <div class="logo">
        <svg id="Layer_1" version="1.1" viewBox="-1 -1 127 153.3">
          <path class="logo" d="M105.7,119.1v28.2v2.8c0,0.6,0.5,1,1,1h17.1l0,0 c0.6,0,1-0.5,1-1v-2.8V65c0-0.1,0-0.1,0-0.1C124.9-1,62.5,0.1,62.5,0.1h0h0c0,0-61-1.1-62.4,62.6h0v87.4c0,0.6,0.5,1,1,1h37.4 C65.7,151.2,89.9,138.7,105.7,119.1z M38.6,132H19.3V64.9c0,0,0-0.8,0.1-2.1c0.6-8.9,5.5-43.5,43.1-43.5h0h0 c43.2,0,43.2,45.6,43.2,45.6C105.7,101.9,75.7,132,38.6,132z" fill="#EFEFEF" stroke-miterlimit="10" stroke-width="2" stroke="#EFEFEF"></path>
        </svg>
      </div>

      <h2 class="text-center">
        {title}
      </h2>
    </header>
  )
}

export default Header
