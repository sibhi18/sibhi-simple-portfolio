import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <span className="project-number">{project.number}</span>
        {project.demo ? (
          <iframe
            className="project-preview"
            src={project.demo}
            title={`${project.title} live preview`}
            loading="lazy"
          />
        ) : (
          <>
            <div className="visual-window">
              <div className="window-dots"><i /><i /><i /></div>
              <div className="visual-lines"><b /><b /><b /><b /></div>
              <div className="visual-blocks"><i /><i /><i /></div>
            </div>
            <span className="visual-caption">PROJECT / {project.number}</span>
          </>
        )}
      </div>
      <div className="project-body">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <div className="project-links">
          {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a> : <span className="link-placeholder">{project.status}</span>}
          {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Github size={15}/> Code</a> : <span className="link-placeholder">Add GitHub URL</span>}
        </div>
      </div>
    </article>
  );
}
