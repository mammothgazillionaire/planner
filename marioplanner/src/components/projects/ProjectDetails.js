import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <span className="card-title">Project title -  {id}</span>
        <p>some text</p>
      </div>
      <div className="card-action grey">
        <div>posted by the author </div>
        <div>16th nov</div>
      </div>
    </div>
  )
}

export default ProjectDetails
