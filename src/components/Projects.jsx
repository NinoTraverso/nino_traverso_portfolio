import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects";

function createProjectCard(project) {
  return (
    <div
      key={project.id}
      className="col-12 col-xl-4 mb-5 d-flex justify-content-center"
    >
      <ProjectCard
        id={project.id}
        img={project.img}
        name={project.name}
        details={project.description}
        projectLink={project.projectLink}
      />
    </div>
  );
}

function Projects() {
  return (
    <div className="mt-5">
      <h1 id="projects" className="sectionTitle d-none d-xl-block">
        PROJECTS
      </h1>
      <h1
        id="projects"
        className="sectionTitleMedium d-none d-md-block d-xl-none text-center"
      >
        PROJECTS
      </h1>
      <h1
        id="projects"
        className="sectionTitleSmall d-block d-md-none text-center"
      >
        PROJECTS
      </h1>

      <div className="row mb-5 mx-1">{projects.map(createProjectCard)}</div>
    </div>
  );
}

export default Projects;
