import React from "react";
import GivsumModalContents from "./GivsumModalContents";
import HagglitModalContents from "./HagglitModalContents";
import TicTacToeModalContents from "./TicTacToeModalContents";

interface Project {
  id: string,
  title: string,
  type: string,
  liveLink: string,
  githubLink: string,
  imageUrl: any,
  description: string,
  tech: string[],
}

function ProjectModal(project: Project) {
  const contents: Map<string, JSX.Element> = new Map([
    ["givsum", <GivsumModalContents />],
    ["hagglit", <HagglitModalContents />],
    ["tic-tac-toe", <TicTacToeModalContents />],
  ]);
  
  return (
    <div className="modal fade" id={`${project.id}-modal`} tabIndex={-1} aria-labelledby={`${project.id}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg modal-fullscreen-md-down">
        <div className="modal-content pb-3 pt-2 px-3">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${project.id}Label`}>
              {project.title}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="bi bi-x" />
            </button>
          </div>
          <div className="modal-body d-flex align-items-center">
            {
              contents.get(project.id)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

