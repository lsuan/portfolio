import React from "react";
import { Link } from "react-router-dom";
import "../styles/page-arrows.scss";
 
function PrevPage(page: {name:string}){
  return (
    <div className="prev-page d-flex justify-content-start align-items-center">
      <hr className="stop-bar"></hr>
      {
        (page.name.split(" ")[1].toLowerCase() === "home") ? (
          <Link to="/" className="d-flex align-items-center btn p-0">
            <i className="ms-1 fa-solid fa-caret-left"></i>
            {page.name}
          </Link>
        ) : (
          <Link to={`/${page.name.split(" ")[1].toLowerCase()}`} className="d-flex align-items-center btn p-0">
            <i className="ms-1 fa-solid fa-caret-left"></i>
            {page.name}
          </Link>
        )
      }
    </div>
  );
}
 
export default PrevPage;

