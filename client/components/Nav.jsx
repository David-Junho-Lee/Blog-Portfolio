import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav">
        <div className="nav-name-home">
          <Link className="nav-name-link" to="/">
            David Lee
          </Link>
        </div>
        <div className="nav-other-links">
          <Link to="/aboutme">About me</Link>
          <Link to="/blogs">Learning journals</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </>
  )
}

export default Nav
