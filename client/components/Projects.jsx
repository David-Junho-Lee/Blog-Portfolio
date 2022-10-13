import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

function Projects() {
  return (
    <>
      <div className="projects">
        <h1>Projects</h1>
        {/* clickable flexbox with image for projects */}
        <div className="projects-container">
          <div className="projects-flexbox">
            <h1>Name of project</h1>
            {/* <img>img of the project</img> */}
            {/* description */}
            {/* githubpage, project website,  */}
          </div>
          <div className="projects-flexbox">
            <h1>Name of project</h1>
            {/* <img>img of the project</img> */}
            {/* description */}
            {/* githubpage, project website,  */}
          </div>
          <div className="projects-flexbox">
            <h1>Name of project</h1>
            {/* <img>img of the project</img> */}
            {/* description */}
            {/* githubpage, project website,  */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
