import React from "react"

import Footer from "./partials/footer"
import Header from "./partials/header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      {location.pathname!==rootPath && <Header title={title} />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
