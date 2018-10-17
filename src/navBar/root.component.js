import React from 'react'
import {navigateToUrl} from 'single-spa'

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">Klink SPA demo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/" onClick={navigateToUrl}>Home</a></li>
        <li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
        <li><a href="/vue" onClick={navigateToUrl}>Vue</a></li>
        {/* <li><a href="/vueURL" onClick={navigateToUrl}>VueURL</a></li> */}

      </ul>
    </div>
  </nav>
)

export default NavBar
