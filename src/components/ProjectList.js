import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          /* Comments should be outside of the JSX code */
          <ProjectItem
            key={project.id}
            name={project.name}
            about={project.description} // Changed 'description' to 'about'
            technologies={project.technologies} // Added 'technologies' prop
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
