import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      <div className="app">
        <div>
          <Nav />
        </div>
        <div className="app-whoami-container">
          <h1 className="app-whoami-h1">
            <span className="app-whoami-text">
              Hello! My name is <strong>David</strong>
              <br></br>A Web developer who just graduated from Dev Academy
              Aotearoa, looking for opportunities to be part of a great team
              making changes to the community
            </span>
          </h1>
        </div>
        <div className="app-flex-container">
          <Link to="/aboutme">
            <div className="app-flexbox box1">
              <h3 className="app-heading3">About me</h3>
            </div>
          </Link>
          <Link to="/learningjournals">
            <div className="app-flexbox box2">
              <h3 className="app-heading3">Learning Journals</h3>
            </div>
          </Link>
          <Link to="/projects">
            <div className="app-flexbox box3">
              <h3 className="app-heading3">Projects</h3>
            </div>
          </Link>
        </div>
        <Routes>
          <Route path="/aboutme" />
          <Route path="/learningjournals" />
          <Route path="/projects" />
        </Routes>
      </div>
    </>
  )
}

export default App
