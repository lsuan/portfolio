import React from "react";
import { Link } from "react-router-dom";
import "../styles/page-arrows.scss";
 
function NextPage(page:{name:string}) {
  return (
    <div className="next-page d-flex justify-content-end align-items-center">
      <Link to="/projects" className="btn d-flex align-items-center p-0">
        {page.name}
        <i className="ms-1 fa-solid fa-caret-right"></i>
      </Link>
      <hr className="stop-bar"></hr>
    </div>
  );
}
 
export default NextPage;

