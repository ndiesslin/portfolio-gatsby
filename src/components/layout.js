import React from "react"

import Footer from "./partials/footer"
import Header from "./partials/header"

const Layout = ({ location, title, children, classes }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      {location.pathname!==rootPath && <Header title={title} />}
      <main class={classes}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
